import { User } from "lucide-react";


export default function Testimonials() {
    return (
        <section className="w-full bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                    What Our Customers Are Saying
                </h2>
                <p className="text-lg text-gray-700 mb-12">
                    Don’t just take our word for it – hear from people who’ve used our platform.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Customer 1 */}
                    <div className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-10 h-10 text-purple-700 mb-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 10h4M7 14h2m3 5H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v5m-9 6h9"
                            />
                        </svg>
                        <p className="text-sm italic mb-4">
                            “This is the best resource for business files. I’ve saved so much time!”
                        </p>
                        <p className="text-sm font-semibold">Jane Doe, Entrepreneur</p>
                        <div className="flex items-center justify-center mt-4 w-10 h-10 rounded-full ring-2 ring-purple-600 bg-white">
                            <User />
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:block w-8 h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    {/* Customer 2 */}
                  
                    <div className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-10 h-10 text-purple-700 mb-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 10h4M7 14h2m3 5H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v5m-9 6h9"
                            />
                        </svg>
                        <p className="text-sm italic mb-4">
                            “I found exactly what I needed in minutes. Fast and easy to use!”
                        </p>
                        <p className="text-sm font-semibold">John Smith, Freelancer</p>
                        <div className="flex items-center justify-center mt-4 w-10 h-10 rounded-full ring-2 ring-purple-600 bg-white">
                            <User />
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <a
                        href="/testimonials"
                        className="text-white bg-purple-700 hover:bg-purple-800 py-2 px-6 rounded-md text-lg font-semibold"
                    >
                        See More Testimonials
                    </a>
                </div>
            </div>
        </section>
    );
}
