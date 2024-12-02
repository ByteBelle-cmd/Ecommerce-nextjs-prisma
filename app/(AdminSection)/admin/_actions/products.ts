"use server";

import db from "@/db/db";
import { z } from "zod";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

async function uploadToCloudinary(file: File, folder: string): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: file.type.startsWith("image/") ? "image" : "raw",
        public_id: `${crypto.randomUUID()}-${file.name}`,
      },
      (error, result) => {
        if (error) return reject(error);
        if (!result?.secure_url) {
          return reject(new Error("Failed to upload file"));
        }
        resolve(result.secure_url);
      }
    );

    uploadStream.end(buffer);
  });
}

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  priceInCents: z.coerce.number().int().min(1),
  file: fileSchema.refine((file) => file.size > 0, "Required"),
  image: imageSchema.refine((file) => file.size > 0, "Required"),
});

const editSchema = addSchema.extend({
  file: fileSchema.optional(),
  image: imageSchema.optional(),
});

export async function addProduct(
  _: unknown,
  formData: FormData
): Promise<z.ZodFormattedError<unknown>> {
  const parsed = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) {
    return parsed.error.format();
  }

  const data = parsed.data;
  const fileUrl = await uploadToCloudinary(data.file, "products/files");
  const imageUrl = await uploadToCloudinary(data.image, "products/images");

  await db.product.create({
    data: {
      isAvailableForPurchase: true,
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      filePath: fileUrl,
      imagePath: imageUrl,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");
  redirect("/admin/products");
}

export async function updateProduct(
  id: string,
  _: unknown,
  formData: FormData
): Promise<z.ZodFormattedError<unknown> | void> {
  const parsed = editSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) {
    return parsed.error.format();
  }

  const data = parsed.data;
  const product = await db.product.findUnique({ where: { id } });

  if (!product) return notFound();

  let filePath = product.filePath;
  if (data.file && data.file.size > 0) {
    filePath = await uploadToCloudinary(data.file, "products/files");
  }

  let imagePath = product.imagePath;
  if (data.image && data.image.size > 0) {
    imagePath = await uploadToCloudinary(data.image, "products/images");
  }

  await db.product.update({
    where: { id },
    data: {
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      filePath,
      imagePath,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");
  redirect("/admin/products");
}

export async function toggleProductAvailability(
  id: string,
  isAvailableForPurchase: boolean
): Promise<void> {
  await db.product.update({ where: { id }, data: { isAvailableForPurchase } });

  revalidatePath("/");
  revalidatePath("/products");
}

export async function deleteProduct(id: string): Promise<void> {
  const product = await db.product.delete({ where: { id } });

  if (!product) return notFound();

  const filePublicId = product.filePath?.split("/").pop()?.split(".")[0];
  const imagePublicId = product.imagePath?.split("/").pop()?.split(".")[0];

  if (filePublicId) {
    await cloudinary.uploader.destroy(filePublicId, { resource_type: "raw" });
  }
  if (imagePublicId) {
    await cloudinary.uploader.destroy(imagePublicId, {
      resource_type: "image",
    });
  }

  revalidatePath("/");
  revalidatePath("/products");
}
