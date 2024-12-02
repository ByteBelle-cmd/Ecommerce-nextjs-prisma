// app/products/page.tsx
import React, { Suspense } from "react";
import { ProductsServer } from "@/components/ProductsServer";
import { ProductCardSkeleton } from "@/components/ProductCard";

export default function FeaturedProducts() {
  return (
    <div className="mt-4">
      <h2 className="text-4xl font-bold text-center ">
        Explore Our Most Popular Documents
      </h2>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-0   items-center">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </div>
        }
      >
        {/* Server Component */}
        <ProductsServer />
      </Suspense>
    </div>
  );
}
