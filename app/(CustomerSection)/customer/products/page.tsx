
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import db from "@/db/db";
import { Suspense } from "react";

const getProducts = () => {
    return db.product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { name: "asc" },
    });
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen  px-4 py-8 lg:px-12 lg:py-16">
            <div className="relative mx-auto max-w-screen-xl">
                <h1 className="text-3xl font-bold text-center text-black mb-8">Products</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center">
                    <Suspense
                        fallback={Array.from({ length: 6 }).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                        ))}
                    >
                        <ProductsSuspense />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

async function ProductsSuspense() {
    const products = await getProducts();
    return (
        <>
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </>
    );
}
