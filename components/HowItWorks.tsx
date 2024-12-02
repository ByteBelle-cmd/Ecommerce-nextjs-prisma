
import { DownloadIcon, ShoppingCart } from "lucide-react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
export default function HowItWorks() {
    return (
        <section className="w-full bg-gradient-to-b from-purple-700 to-purple-800 text-white py-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                    How It Works
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Step 1 */}
                    <div className="flex-1 text-center">
                        <div className="text-5xl font-bold mb-4 flex items-center justify-center gap-2">
                            <span>1</span>

                        </div>
                        <p className="text-lg font-semibold flex items-center justify-center">
                            Sign Up  <VscAccount className="ml-3" size={20} />
                        </p>
                        <p className="text-sm mt-2">
                            Create your account and verify your details to start exploring our products library of digital documents.
                        </p>
                    </div>
                    <div className="hidden md:block w-8 h-8">
                        <TfiArrowCircleRight size={40} color="white" />
                    </div>
                    {/* Step 2 */}
                    <div className="flex-1 text-center">
                        <div className="text-5xl font-bold mb-4 flex items-center justify-center gap-2">
                            <span>2</span>

                        </div>

                        <p className="text-lg font-semibold flex items-center justify-center">
                            Browse and Buy  <ShoppingCart className="ml-3" size={20} />
                        </p>

                        <p className="text-sm mt-2">
                            Explore a wide range of documents,  purchase securely with ease.
                        </p>
                    </div>
                    <div className="rotate-0 md:rotate-180 w-8 h-8">
                        <TfiArrowCircleRight size={40} color="white" />
                    </div>
                    {/* Step 3 */}
                    <div className="flex-1 text-center">
                        <div className="text-5xl font-bold mb-4 flex items-center justify-center gap-2">
                            <span>3</span>

                        </div>
                        <p className="text-lg font-semibold flex items-center justify-center">
                            Download Instantly  <DownloadIcon className="ml-3" size={20} />
                        </p>
                        <p className="text-sm mt-2">
                            Access your purchased documents immediately and download  anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
