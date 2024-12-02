export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="/about-us" className="text-gray-400 hover:text-white">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/shop" className="text-gray-400 hover:text-white">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="text-gray-400 hover:text-white">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-400 hover:text-white">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24h11.495v-9.294H9.692V11.06h3.128V8.347c0-3.1 1.894-4.79 4.659-4.79 1.325 0 2.463.099 2.793.143v3.24h-1.916c-1.504 0-1.796.714-1.796 1.763v2.311h3.592l-.467 3.646h-3.125V24h6.127c.73 0 1.325-.594 1.325-1.326V1.326C24 .594 23.406 0 22.675 0z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.634 2.163 15.254 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608C4.516 2.563 5.783 2.292 7.149 2.23 8.416 2.172 8.796 2.163 12 2.163zm0-2.163C8.692 0 8.29.014 7.052.072 5.827.131 4.612.406 3.656 1.363c-.956.956-1.231 2.171-1.29 3.396C2.014 5.71 2 6.112 2 12c0 5.889.014 6.29.072 7.527.059 1.225.334 2.44 1.29 3.396.956.956 2.171 1.231 3.396 1.29C8.29 23.986 8.692 24 12 24s3.71-.014 4.948-.072c1.225-.059 2.44-.334 3.396-1.29.956-.956 1.231-2.171 1.29-3.396.058-1.237.072-1.638.072-7.527s-.014-6.29-.072-7.527c-.059-1.225-.334-2.44-1.29-3.396C19.388.406 18.173.131 16.948.072 15.71.014 15.308 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zm0 10.162a3.999 3.999 0 110-8 3.999 3.999 0 010 8zm6.406-11.845a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.045.763.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.316 0-.623-.031-.923-.088.623 1.946 2.433 3.362 4.576 3.402-1.675 1.309-3.786 2.091-6.078 2.091-.394 0-.779-.023-1.161-.067 2.165 1.389 4.734 2.199 7.499 2.199 9.004 0 13.926-7.456 13.926-13.926 0-.211 0-.422-.016-.632.956-.691 1.786-1.56 2.444-2.548l-.047-.02z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M20.447 20.452H17.22V15.78c0-1.112-.021-2.547                                .088-1.663 1.086-1.663h.009c.971 0 1.059.712 1.059 1.631v4.704h3.222v-4.793c0-2.563-1.373-3.757-3.201-3.757-1.477 0-2.137.812-2.503 1.385v-1.188h-3.222c.043.791 0 8.514 0 8.514h3.222v-4.704c0-.88.159-1.663 1.059-1.663h.009c.971 0 1.059.712 1.059 1.631v4.704h3.222v-4.793c0-2.563-1.373-3.757-3.201-3.757-1.477 0-2.137.812-2.503 1.385v-1.188h-3.222c.043.791 0 8.514 0 8.514h3.222v-4.704c0-.88.159-1.663 1.059-1.663h.009c.971 0 1.059.712 1.059 1.631v4.704z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Sign Up for Updates</h4>
                    <p className="text-gray-400 mb-4">
                        Get the latest product releases, tips, and more delivered straight to your inbox.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-r-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

