import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <div className="w-full h-[60vh] md:h-screen">
            <div
                className="w-full h-full bg-center bg-cover bg-[url('/hero3.jpg')] aspect-[16/9] flex flex-col justify-center items-center"
            >
                <div className="text-center text-white p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-sm bg-white/30">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 p-1">
                        Quick and hassle-free downloads
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl p-1">
                        Simplified shopping for digital documents and images.
                    </p>
                    <Button
                        variant="outline"
                        className="mt-4 bg-pink-600 hover:bg-purple-600"
                    >
                        <Link href="/sign-up">
                            Get Started Now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
