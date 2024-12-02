import db from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
type Params = Promise<{ downloadVerificationId: string }>;
export async function GET(req: Request, { params }: { params: Params }) {
  const downloadVerificationId = (await params).downloadVerificationId;

  if (!downloadVerificationId) {
    return NextResponse.redirect(
      new URL("/customer/products/download/expired", req.url)
    );
  }

  const data = await db.downloadVerification.findUnique({
    where: { id: downloadVerificationId },
    include: { product: true },
  });

  if (!data || data.expiresAt <= new Date()) {
    return NextResponse.redirect(
      new URL("/customer/products/download/expired", req.url)
    );
  }

  const { filePath, name } = data.product;
  const extension = filePath.split(".").pop();

  const response = await fetch(filePath);
  console.log(response, "this is response");
  if (!response.ok) {
    return NextResponse.redirect(new URL(req.url));
  }

  const fileBuffer = await response.arrayBuffer();

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Disposition": `attachment; filename="${name}.${extension}"`,
      "Content-Length": response.headers.get("content-length") || "0",
      "Content-Type":
        response.headers.get("content-type") || "application/octet-stream",
    },
  });
}
