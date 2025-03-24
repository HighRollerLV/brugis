import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
    return (
        <div className="bg-[#1E1E1E]">
            <header className="text-white py-4 max-w-screen-xl mx-auto px-4">
                <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                    {/* Logo */}
                    <h1 className="text-2xl md:text-3xl font-serif tracking-wide">BRUĢĒŠANA</h1>

                    {/* Navigation */}
                    <nav>
                        <ul className="hidden md:flex space-x-10 text-sm md:text-base">
                            <li>
                                <Link to="/" className="hover:underline cursor-pointer">SĀKUMS</Link>
                            </li>
                            <li>
                                <Link to="/pakalpojumi" className="hover:underline cursor-pointer">PAKALPOJUMI</Link>
                            </li>
                            <li>
                                {/* Correct the link here to /projekti */}
                                <Link to="/projekti" className="hover:underline cursor-pointer">OBJEKTI</Link>
                            </li>
                            <li>
                                <Link to="/kontakti" className="hover:underline cursor-pointer">KONTAKTI</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <button className="text-white text-xl">☰</button>
                        {/* You could implement a mobile menu here later */}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;

