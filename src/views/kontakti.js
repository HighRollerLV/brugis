import React from "react";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#292929] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl bg-[#292929] rounded-2xl overflow-hidden shadow-2xl border border-gray-300">
                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Contact Form */}
                    <div className="p-8 md:p-12 md:w-2/3">
                        <h1 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-gray-400">
                            SAZIŅAS FORMA
                        </h1>
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Vārds, Uzvārds"
                                    className="w-full h-14 bg-gray-300 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1">
                                    <input
                                        type="email"
                                        placeholder="E-pasts"
                                        className="w-full h-14 bg-gray-300 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                                    />
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="tel"
                                        placeholder="Tālrunis"
                                        className="w-full h-14 bg-gray-300 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    placeholder="Ziņas Teksts"
                                    className="w-full h-56 bg-gray-300 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-gray-50 to-gray-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-gray-400/20 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                SŪTĪT ZIŅU
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="bg-[#1e1e1e] p-8 md:p-12 md:w-1/3 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-gray-300">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-2">KONTAKTI</h2>
                                <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-lg text-white font-medium">Mārtiņš Miķelsons</p>
                                </div>
                                <div>
                                    <p className="text-gray-300">
                                        TĀLR.: <span className="font-bold text-white">+371 22451193</span>
                                    </p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-gray-300">
                                <p className="text-gray-400 text-sm">
                                    Sazinieties ar mums, lai saņemtu bezmaksas konsultāciju par jūsu projektu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;