export default function Benefits() {
    return (
        <section className="w-full bg-gradient-to-b from-purple-700 to-pink-800 text-white py-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Why Choose Us?
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Benefit 1 */}
                    <div className="flex-1 text-center bg-white p-6 shadow-md rounded-md text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-purple-700 mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a1 1 0 011-1h4a1 1 0 011 1v6m-4-4h.01M20 12c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7z" />
                        </svg>
                        <p className="text-lg font-semibold mb-2">
                            Instant Access
                        </p>
                        <p className="text-sm">
                            Download your digital files immediately after purchase.
                        </p>
                    </div>
                    {/* Arrow */}
                    <div className="hidden md:block w-8 h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    {/* Benefit 2 */}
                    <div className="flex-1 text-center bg-white p-6 shadow-md rounded-md text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-pink-700 mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 3.866 3.582 7 8 7s8-3.134 8-7z" />
                        </svg>
                        <p className="text-lg font-semibold mb-2">
                            Secure Payments
                        </p>
                        <p className="text-sm">
                            We use the latest encryption technology to keep your payment information safe.
                        </p>
                    </div>
                    {/* Arrow */}
                    <div className="hidden md:block w-8 h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    {/* Benefit 3 */}
                    <div className="flex-1 text-center bg-white p-6 shadow-md rounded-md text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-purple-700  mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-lg font-semibold mb-2">
                            Wide Range of Documents
                        </p>
                        <p className="text-sm">
                            From templates and forms to books and reports, we’ve got it all.
                        </p>
                    </div>
                    {/* Arrow */}
                    <div className="hidden md:block w-8 h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    {/* Benefit 4 */}
                    <div className="flex-1 text-center bg-white p-6 shadow-md rounded-md text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-pink-700 mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17h18M9 3l-3 3 3 3m6-6l3 3-3 3" />
                        </svg>
                        <p className="text-lg font-semibold mb-2">
                            Affordable Prices
                        </p>
                        <p className="text-sm">
                            High-quality content at prices that won’t break the bank.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
