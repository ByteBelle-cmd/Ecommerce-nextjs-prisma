// components/ProductsServer.tsx
import React from "react";
import db from "@/db/db";
import { ProductsCarousel } from "./ProductsCarousel";


export const fetchProducts = async () => {
    return await db.product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { name: "asc" },
    });
};

export async function ProductsServer() {
    const products = await fetchProducts();
    return <ProductsCarousel products={products} />;
}
