import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import db from "@/db/db";

import { Product } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const getMostPopularProducts = () => {
    return db.product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { orders: { _count: "desc" } },
        take: 6,
    });
};

const getNewestProducts = () => {
    return db.product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { createdAt: "desc" },
        take: 6,
    });
};

export default function HomePage() {
    return (
        <div className="space-y-16  px-4 py-8 lg:px-12 lg:py-16 overflow-hidden">
            <ProductGridSection
                title="Most Popular"
                productsFetcher={getMostPopularProducts}
            />
            <ProductGridSection title="Newest" productsFetcher={getNewestProducts} />
        </div>
    );
}

type ProductGridSectionProps = {
    title: string;
    productsFetcher: () => Promise<Product[]>;
};

function ProductGridSection({
    productsFetcher,
    title,
}: ProductGridSectionProps) {
    return (
        <div className="relative mx-auto max-w-screen-xl space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-black">{title}</h2>
                <Button variant="outline" asChild>
                    <Link href="/customer/products" className="flex items-center space-x-2 text-black">
                        <span>View All</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center">
                <Suspense
                    fallback={Array.from({ length: 6 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                >
                    <ProductSuspense productsFetcher={productsFetcher} />
                </Suspense>
            </div>
        </div>
    );
}

async function ProductSuspense({
    productsFetcher,
}: {
    productsFetcher: () => Promise<Product[]>;
}) {
    const products = await productsFetcher();
    return (
        <>
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </>
    );
}
