import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-xl font-bold">MyLogo</a>
                    </div>

                    {/* Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                            <span className="sr-only">Open Main Menu</span>
                            {/* Icone */}
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Links Desktop */}
                    <div className="hidden md:flex space-x-4">
                        <a href="#home" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                            Home
                        </a>
                        <a href="#about" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                            About
                        </a>
                        <a href="#contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                            Contact
                        </a>
                    </div>
                </div>
            </div>

            {/* Links Mobile */}
            {isOpen && (
                <div className="md:hidden bg-gray-700">
                    <a href="#home" className="block px-3 py-2 hover:bg-gray-600">
                        Home
                    </a>
                    <a href="#about" className="block px-3 py-2 hover:bg-gray-600">
                        About
                    </a>
                    <a href="#contact" className="block px-3 py-2 hover:bg-gray-600">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
