import React, { useState, useEffect } from "react";
import Brugis9 from "../img/brugis9.jpeg";
import Brugis2 from "../img/brugis2.jpeg";
import Brugis3 from "../img/brugis3.jpeg";
import "../App.css";

const HomePage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        {
            src: Brugis9,
            alt: "Bruģēšanas piemērs 1",
            caption: "Profesionāla bruģēšana",
            description: "Augstas kvalitātes materiāli un precīzs izpildījums"
        },
        {
            src: Brugis2,
            alt: "Bruģēšanas piemērs 2",
            caption: "Mūsu darbu piemēri",
            description: "Piedāvājam ilgtspējīgus risinājumus"
        },
        {
            src: Brugis3,
            alt: "Bruģēšanas piemērs 3",
            caption: "Individuāla pieeja",
            description: "Katram klientam - personīgs risinājums"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="min-h-screen bg-[#292929] overflow-hidden">
            <main className="relative flex items-center justify-center min-h-[calc(100vh-80px)]">
                {/* Modern decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[#292929] opacity-95"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMzMzMiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
                </div>

                <div className="relative z-20 text-white max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 py-12 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                        {/* Left Content - Modernized */}
                        <div className="lg:w-1/2 mb-12 lg:mb-0">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-left">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-gray-400 relative z-10">
                                    PAR MUMS
                                </span>
                            </h2>

                            <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl opacity-90 text-left">
                                Mēs esam pieredzējuši bruģēšanas speciālisti, kas ar to nodarbojas jau vairākus gadus, mēs
                                nodrošinām kvalitatīvu un precīzu darbu.
                                Strādājam gan ar privātajām, gan uzņēmumiem, piedāvājot dažādus risinājumus, lai jūsu
                                pagalms, piebraucamais ceļš vai dārzs izskatītos nevainojami.
                            </p>

                            <div className="text-left">
                                <a href="/kontakti" className="inline-block">
                                    <button className="relative w-48 h-14 font-bold bg-gradient-to-r from-gray-50 to-gray-400 text-black px-6 py-3 rounded-md overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/20">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            SAZINĀTIES
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Image Carousel - Modernized */}
                        <div className="lg:w-1/2 relative h-full">
                            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl lg:rounded-[2rem] shadow-2xl border border-gray-700/50 transform lg:-translate-x-8 transition-all duration-500 group">
                                {images.map((image, index) => (
                                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover object-center"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                                    </div>
                                ))}

                                <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                                    <div className="p-4 inline-block">
                                        <h3 className="text-xl lg:text-2xl font-semibold">{images[currentImageIndex].caption}</h3>
                                        <p className="text-sm lg:text-base opacity-90">{images[currentImageIndex].description}</p>
                                    </div>
                                </div>

                                {/* Modern navigation dots */}
                                <div className="absolute bottom-6 right-6 flex space-x-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/30'}`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;