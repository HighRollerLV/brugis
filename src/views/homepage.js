import React from "react";
import Brugis9 from "../img/brugis9.jpeg";
import "../App.css";

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#292929]">
            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center">
                <div className="text-white max-w-screen-xl mx-auto px-6 md:px-12 py-8">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                        {/* Left Content */}
                        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8">PAR MUMS</h2>
                            <p className="text-gray-300 mb-8">
                                Mēs esam pieredzējuši bruģēšanas speciālisti, kas ar to nodarbojas jau vairākus gadus, mēs
                                nodrošinām kvalitatīvu un precīzu darbu.
                                Strādājam gan ar privātajām, gan uzņēmumiem, piedāvājot dažādus risinājumus, lai jūsu
                                pagalms,
                                piebraucamais ceļš vai dārzs izskatītos nevainojami.
                            </p>
                            <button
                                className="bg-black text-white px-6 py-2 border border-white hover:bg-white hover:text-black transition">
                                SAZINĀTIES
                            </button>
                        </div>

                        {/* Right Image Placeholder */}
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src={Brugis9}
                                className="w-[478px] h-[638px] flex items-center justify-center"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;