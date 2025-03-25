import React from "react";

const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#292929]">
        <div className="text-white py-4 max-w-screen-xl mx-auto px-4 flex items-center justify-center">
            <div className="bg-[#000000] p-8 w-[1065px] h-[566px] flex flex-col md:flex-row mt-16">
                {/* Left Side - Contact Form */}
                <div className="md:w-2/3 pr-8">
                    <h1 className="text-lg font-semibold mb-6">SAZIŅAS FORMA</h1>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Vārds, Uzvārds"
                            className="w-[470px] h-[60px] bg-gray-300 text-black p-3"
                        />
                            <input
                                type="email"
                                placeholder="E-pasts"
                                className="w-[225px] h-[60px] bg-gray-300 text-black p-3 mr-2.5"
                            />
                            <input
                                type="tel"
                                placeholder="Tālrunis"
                                className="w-[225px] h-[60px] bg-gray-300 text-black p-3 ml-2.5"
                            />
                        <textarea
                            placeholder="Ziņas Teksts"
                            className="w-[470px] h-[236px] max-h-[260px] bg-gray-300 text-black p-3"
                        />
                    </form>
                </div>

                {/* Right Side - Contact Info */}
                <div className="md:w-1/3 flex flex-col items-center justify-center text-center">
                    <p className="text-lg mb-2">Mārtiņš Miķelsons</p>
                    <p className="text-gray-300">
                        TĀLR.: <span className="font-bold">22 451 193</span>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactPage;