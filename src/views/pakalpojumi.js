import React from "react";
import Brugis1 from "../img/brugis1.jpeg";
import Brugis6 from "../img/brugis6.jpeg";
import Brugis8 from "../img/brugis8.jpeg";
import "../App.css";

const ServicesSection = () => {
    return (
        <div className="min-h-screen bg-[#292929] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        KO MĒS PIEDĀVĀJAM
                    </h2>
                    <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {/* Service 1 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-[#1e1e1e] border border-gray-400">
                        <div className="overflow-hidden h-64">
                            <img
                                src={Brugis8}
                                alt="Bruģa ieklāšana"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-white">Bruģa ieklāšana</h3>
                            <p className="text-gray-300">
                                Profesionāla dažādu veidu bruģa uzstādīšana jebkurā teritorijā.
                            </p>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-[#1e1e1e] border border-gray-400">
                        <div className="overflow-hidden h-64">
                            <img
                                src={Brugis6}
                                alt="Apmales un nožogojumi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-white">Apmales un nožogojumi</h3>
                            <p className="text-gray-300">
                                Precīza un estētiska apmaļu uzstādīšana, kas nodrošina bruģa ilgmūžību.
                            </p>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-[#1e1e1e] border border-gray-400">
                        <div className="overflow-hidden h-64">
                            <img
                                src={Brugis1}
                                alt="Kāpņu un pakāpienu izbūve"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-white">Kāpņu un pakāpienu izbūve</h3>
                            <p className="text-gray-300">
                                Izturīgi un vizuāli pievilcīgi risinājumi jūsu dārzam vai pagalma zonai.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <a href="/kontakti">
                        <button className="px-8 py-3 font-medium text-black bg-white border border-white rounded-lg transition-all hover:bg-gray-200 hover:shadow-lg flex items-center mx-auto">
                            <span>SAZINĀTIES AR MUMS</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;