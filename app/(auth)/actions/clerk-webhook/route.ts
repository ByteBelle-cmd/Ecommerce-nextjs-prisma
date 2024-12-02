import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { signUpUser } from "../authActions";

// Webhook handler for Clerk events
export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SVIX_SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    console.error("Error: SIGNING_SECRET is not defined");
    return new Response("Error: SIGNING_SECRET is missing", { status: 500 });
  }

  const wh = new Webhook(SIGNING_SECRET);

  try {
    const headerPayload = await headers();
    const svixId = headerPayload.get("svix-id");
    const svixTimestamp = headerPayload.get("svix-timestamp");
    const svixSignature = headerPayload.get("svix-signature");
    const contentType = headerPayload.get("content-type");

    if (!svixId || !svixTimestamp || !svixSignature) {
      console.error("Error: Missing required Svix headers");
      return new Response("Error: Missing required Svix headers", {
        status: 400,
      });
    }

    if (contentType !== "application/json") {
      console.error(`Error: Unexpected Content-Type: ${contentType}`);
      return new Response("Error: Content-Type must be application/json", {
        status: 400,
      });
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);

    let evt: WebhookEvent;
    try {
      evt = wh.verify(body, {
        "svix-id": svixId,
        "svix-timestamp": svixTimestamp,
        "svix-signature": svixSignature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Error: Could not verify webhook:", err);
      return new Response("Error: Webhook verification failed", {
        status: 400,
      });
    }

    const eventType = evt.type;
    console.log(`Received webhook with event type ${eventType}`);

    switch (eventType) {
      case "user.created": {
        const userData = payload.data;
        const {
          email_addresses,
          username,
          id: clerkId,
          external_id: googleProviderId,
        } = userData;

        if (!email_addresses?.length || !username || !clerkId) {
          console.error(
            "Error: Missing required fields in user.created payload"
          );
          return NextResponse.json(
            { error: "Missing required fields: email, username, or clerkId" },
            { status: 400 }
          );
        }

        const email = email_addresses[0]?.email_address;
        if (!email) {
          console.error("Error: Invalid email format");
          return NextResponse.json(
            { error: "Invalid email format" },
            { status: 400 }
          );
        }

        const result = await signUpUser(
          clerkId,
          email,
          username,
          googleProviderId
        );
        if (result.error) {
          return NextResponse.json(
            { error: result.error },
            { status: result.status || 500 }
          );
        }

        console.log("User created successfully:", email);
        return NextResponse.json({ message: "User created successfully" });
      }

      default:
        console.log(`Unhandled event type: ${eventType}`);
        return NextResponse.json(
          { message: `Unhandled event type: ${eventType}` },
          { status: 200 }
        );
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Webhook processing error:", error.message);
      return NextResponse.json(
        { error: error.message || "Internal server error" },
        { status: 500 }
      );
    } else {
      console.error("Webhook processing error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
}
