import React from "react";

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
                        <li className="hover:underline cursor-pointer">SĀKUMS</li>
                        <li className="hover:underline cursor-pointer">PAKALPOJUMI</li>
                        <li className="hover:underline cursor-pointer">OBJEKTI</li>
                        <li className="hover:underline cursor-pointer">KONTAKTI</li>
                    </ul>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button className="text-white text-xl">☰</button>
                </div>
            </div>
        </header>
        </div>
    );
};

export default Header;