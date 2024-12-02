"use server";

import db from "@/db/db";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function userOrderExists(email: string, productId: string) {
  return (
    (await db.order.findFirst({
      where: { user: { email }, productId },
      select: { id: true },
    })) != null
  );
}

export async function createOrder({
  productId,
  priceInCents,
}: {
  productId: string;
  priceInCents: number;
}) {
  try {
    // Fetch user details and authentication info
    const user = await currentUser();
    if (!user) throw new Error("Authentication failed. No user found.");

    const { userId } = await auth();
    if (!userId) throw new Error("Authentication failed. User ID is missing.");

    // Log inputs for debugging
    console.log("Creating order with data:", {
      userId,
      productId,
      pricePaidInCents: priceInCents,
    });

    // Check if user exists in the database
    const userInDB = await db.user.findUnique({
      where: { clerkId: userId },
    });
    if (!userInDB) {
      console.error("User not found in the database:", { userId });
      throw new Error("Invalid user.");
    }

    // Check if product exists in the database
    const product = await db.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      console.error("Product not found in the database:", { productId });
      throw new Error("Invalid product.");
    }

    // Create order in the database
    const order = await db.order.create({
      data: {
        userId: userInDB.id,
        productId,
        pricePaidInCents: priceInCents,
      },
    });

    if (!order) {
      console.error("Order creation failed. Database returned no response.");
      throw new Error("Order creation failed.");
    }

    console.log("Order created successfully:", order);
    return order;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error in createOrder:", error);
      throw new Error(error.message || "Order creation failed.");
    } else {
      console.error("Error in createOrder:", error);
      throw new Error("Order creation failed due to an unknown error.");
    }
  }
}
