import React from "react";
import Brugis1 from "../img/brugis1.jpeg";
import Brugis6 from "../img/brugis6.jpeg";
import Brugis8 from "../img/brugis8.jpeg";
import "../App.css";
import Brugis9 from "../img/brugis9.jpeg";

const ServicesSection = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#292929]">
        <section className="text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-16">KO MĒS PIEDĀVĀJAM</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
                    {/* Service 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-xs flex items-center justify-center">
                            <img
                                src={Brugis8}
                                className="w-[315px] h-[447px] flex items-center justify-center"
                            />
                        </div>
                        <p className="mt-4 text-center w-[315px]">
                            Bruģa ieklāšana - profesionāla dažādu veidu bruģa uzstādīšana jebkurā teritorijā.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-xs flex items-center justify-center">
                            <img
                                src={Brugis6}
                                className="w-[315px] h-[447px] object-cover"
                            />
                        </div>
                        <p className="mt-4 text-center w-[315px]">
                            Apmales un nožogojumi - precīza un estētiska apmaļu uzstādīšana, kas nodrošina bruģa
                            ilgmūžību.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-xs flex items-center justify-center">
                            <img
                                src={Brugis1}
                                className="w-[315px] h-[447px] flex items-center justify-center"
                            />
                        </div>
                        <p className="mt-4 text-center w-[315px]">
                            Kāpņu un pakāpienu izbūve - izturīgi un vizuāli pievilcīgi risinājumi jūsu dārzam vai pagalma zonai.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default ServicesSection;