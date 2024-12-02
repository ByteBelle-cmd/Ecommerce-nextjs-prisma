"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ProductCard } from "@/components/ProductCard";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Product } from "@prisma/client";

export function ProductsCarousel({ products }: { products: Product[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    // Handlers for navigation
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <div className="w-full flex items-center justify-center overflow-hidden relative">
            {/* Previous Button */}
            <button
                className="absolute left-0 bg-pink-600 rounded-full hover:bg-purple-600 p-4 text-sm text-white transition z-10"
                onClick={scrollPrev}
            >
                <ArrowBigLeft size={20} />
            </button>

            {/* Carousel Container */}
            <div className="w-full mx-auto flex" ref={emblaRef}>
                <div className="flex -mx-7 p-7 w-full">
                    {products.map((product) => (
                        <div key={product.id} className="p-6">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Button */}
            <button
                className="absolute right-0 p-4 rounded-full bg-pink-600 hover:bg-purple-600 text-sm text-white transition z-10"
                onClick={scrollNext}
            >
                <ArrowBigRight size={20} />
            </button>
        </div>
    );
}
