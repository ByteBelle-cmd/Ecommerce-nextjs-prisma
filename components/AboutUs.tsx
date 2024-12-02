import Image from "next/image";
import { Button } from "./ui/button";

export default function AboutUs() {
    return (
        <section className="w-full px-6 py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Image Section */}
                <div className="flex-1">
                    <Image
                        src="/hero1.jpg"
                        alt="About Us Hero"
                        className="rounded-lg shadow-lg w-full h-auto object-cover"
                        width={1000}
                        height={1000}
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                        Who We Are
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        At DocuCart, we believe that knowledge should be easy to access.
                        Our platform offers a wide range of high-quality digital documents
                        and resources designed to help you succeed. Whether you&apos;re looking for
                        educational eBooks, professional templates, or business guides, you&apos;ll
                        find everything you need in one place.
                    </p>
                    <Button className="  px-6 py-3 text-sm font-medium rounded" variant={'outline'}>
                        Learn More About Us
                    </Button>
                </div>
            </div>
        </section>
    );
}
