import db from "@/db/db";
import { notFound } from "next/navigation";
import Stripe from "stripe";
import { CheckoutForm } from "../../_components/CheckoutForm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function PurchasePage({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;

    const product = await db.product.findUnique({ where: { id } });
    if (product == null) return notFound();

    const paymentIntent = await stripe.paymentIntents.create({
        amount: product.priceInCents,
        currency: "USD",
        metadata: { productId: product.id },
    });

    if (paymentIntent.client_secret == null) {
        throw Error("Stripe failed to create payment intent");
    }

    return (
        <div className="min-h-screen px-4 py-8 lg:px-12 lg:py-16">
            <div className="relative mx-auto max-w-screen-xl text-center">
                <h1 className="text-3xl font-bold text-white mb-6">Purchase Product</h1>
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <CheckoutForm
                        product={product}
                        clientSecret={paymentIntent.client_secret}
                    />
                </div>
            </div>
        </div>
    );
}
