"use server";
import db from "@/db/db";
import { auth } from "@clerk/nextjs/server";
import { Role } from "@prisma/client";

// Function to handle user sign-up and database sync
export const signUpUser = async (
  clerkId: string,
  email: string,
  username: string,
  googleProviderId?: string
) => {
  try {
    // Determine role based on email or other criteria
    const role = email === process.env.ADMIN_EMAIL ? Role.ADMIN : Role.USER;

    // Upsert user in the database
    const user = await db.user.upsert({
      where: { clerkId },
      update: {},
      create: {
        clerkId,
        email,
        username,
        role,
        googleProviderId,
        isEmailVerified: true,
      },
    });
    console.log("User created/updated in database:", user);
    return { user };
  } catch (error) {
    console.error("Error syncing user:", error);
    return { error: "Failed to sync user", status: 500 };
  }
};

// Middleware to authorize admin users
export async function authorizeAdmin() {
  const { userId } = await auth();
  console.log(userId, "admin user id");
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkId: userId },
    select: { role: true },
  });
  console.log(user?.role, "user?.role from adin");
  if (user?.role !== Role.ADMIN) {
    throw new Error("Forbidden");
  }
  return user.role;
}
