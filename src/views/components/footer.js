import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#1E1E1E] text-white py-8 px-4 border-t border-[#292929]">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Phone */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center mb-2 group">
                            <div className="bg-[#292929] p-3 rounded-full mr-3 group-hover:bg-gray-700 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-400">Phone</p>
                                <p className="text-lg font-medium">22 451 193</p>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center mb-2 group">
                            <div className="bg-[#292929] p-3 rounded-full mr-3 group-hover:bg-gray-700 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-400">Email</p>
                                <p className="text-lg font-medium">martinsmikelsons1@inbox.lv</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Person */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex items-center mb-2 group">
                            <div className="bg-[#292929] p-3 rounded-full mr-3 group-hover:bg-gray-700 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-400">Contact</p>
                                <p className="text-lg font-medium">Mārtiņš Miķelsons</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-[#292929] text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Bruģēšanas Pakalpojumi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
