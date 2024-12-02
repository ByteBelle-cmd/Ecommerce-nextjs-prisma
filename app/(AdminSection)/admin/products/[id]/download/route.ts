import db from "@/db/db";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request:  Request,{ params }: { params: Promise<{ id: string }> }) {
  // Destructure the 'id' directly from params
  const id = (await params).id;

  if (!id) {
    return new NextResponse("Missing product ID", { status: 400 });
  }

  // Fetch the product details from the database
  const product = await db.product.findUnique({
    where: { id },
    select: { filePath: true, name: true },
  });

  if (!product) {
    return notFound(); // Return 404 if product doesn't exist
  }

  const { filePath, name } = product;

  try {
    // Fetch the file from Cloudinary
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    // Get the content type and buffer size
    const contentType = response.headers.get("content-type");
    const fileBuffer = Buffer.from(await response.arrayBuffer());
    const fileSize = fileBuffer.length;

    if (!contentType) {
      throw new Error("Content-Type header is missing");
    }

    // Extract the file extension (e.g., 'png' from 'image/png')
    const extension = contentType.split("/")[1];

    // Return the file as a downloadable response
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${name}.${extension}"`,
        "Content-Length": fileSize.toString(),
      },
    });
  } catch (error) {
    console.error("Error fetching file from Cloudinary:", error);
    return new NextResponse("Failed to download file", { status: 500 });
  }
}
