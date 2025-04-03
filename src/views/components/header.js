import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-[#1E1E1E] border-b border-gray-800 sticky top-0 z-50">
            <header className="text-white py-4 max-w-screen-xl mx-auto px-4">
                <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                    {/* Logo - Enhanced */}
                    <Link to="/" className="group">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-wider transition-all duration-300 group-hover:text-gray-300">
                            <span className="text-white">BRU</span>
                            <span className="text-gray-400">ĢĒŠANA</span>
                        </h1>
                    </Link>

                    {/* Desktop Navigation - Modernized */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {[
                                { path: "/", name: "SĀKUMS" },
                                { path: "/pakalpojumi", name: "PAKALPOJUMI" },
                                { path: "/projekti", name: "OBJEKTI" },
                                { path: "/kontakti", name: "KONTAKTI" }
                            ].map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className="relative py-2 px-1 text-sm uppercase tracking-wider font-medium hover:text-gray-300 transition-colors duration-300"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu - Improved */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white text-2xl focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#1E1E1E] py-4 px-4 border-t border-gray-800">
                        <ul className="space-y-4">
                            {[
                                { path: "/", name: "SĀKUMS" },
                                { path: "/pakalpojumi", name: "PAKALPOJUMI" },
                                { path: "/projekti", name: "OBJEKTI" },
                                { path: "/kontakti", name: "KONTAKTI" }
                            ].map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className="block py-2 px-2 text-base uppercase font-medium hover:bg-gray-800 rounded transition-colors duration-300"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;

