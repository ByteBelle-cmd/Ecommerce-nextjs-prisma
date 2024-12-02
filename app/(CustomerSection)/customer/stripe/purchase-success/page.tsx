import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function SuccessPage({
    searchParams,
}: {
    searchParams: { payment_intent?: string };
}) {
    // Validate and retrieve payment intent ID
    const paymentIntentId = searchParams.payment_intent;
    if (!paymentIntentId) return notFound();

    // Retrieve the payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (!paymentIntent.metadata.productId) return notFound();

    // Fetch the product from the database
    const product = await db.product.findUnique({
        where: { id: paymentIntent.metadata.productId },
    });
    if (!product) return notFound();

    // Check if the payment succeeded
    const isSuccess = paymentIntent.status === "succeeded";

    // Generate a download verification ID if the payment succeeded
    const downloadVerificationId = isSuccess
        ? await createDownloadVerification(product.id)
        : null;

    return (
        <div className="min-h-screen px-4 py-8 lg:px-12 lg:py-16">
            <div className="relative mx-auto max-w-screen-lg bg-white rounded-lg shadow-md p-6 md:p-8 space-y-8">
                <h1 className="text-3xl font-bold text-center text-zinc-900">
                    {isSuccess ? "Success!" : "Error!"}
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative w-full md:w-1/2 aspect-video">
                        <Image
                            src={product.imagePath}
                            fill
                            alt={product.name}
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="flex flex-col w-full text-center md:text-left">
                        <div className="text-xl font-semibold text-zinc-700">
                            {formatCurrency(product.priceInCents / 100)}
                        </div>
                        <h2 className="text-2xl font-bold text-zinc-900">{product.name}</h2>
                        <p className="line-clamp-3 text-zinc-600">{product.description}</p>
                        <Button
                            className="mt-4 w-[30%]"
                            size="lg"
                            asChild
                            variant={"outline"}
                        >
                            {isSuccess ? (
                                <a
                                    href={`http://localhost:3000/customer/products/download/${downloadVerificationId}`}
                                >
                                    Download
                                </a>
                            ) : (
                                <Link href={`/products/${product.id}/purchase`}>Try Again</Link>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper function to create a download verification entry in the database
async function createDownloadVerification(productId: string) {
    const verification = await db.downloadVerification.create({
        data: {
            productId,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // Expires in 24 hours
        },
    });
    return verification.id;
}
