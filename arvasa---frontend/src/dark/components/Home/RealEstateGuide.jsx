import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion, useInView } from "framer-motion";
import "swiper/css/pagination";
import { Heading } from "../Utils/Heading";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import locality1 from "/assets/YourRealEstateGuide1.jpg";

const cards = [
    { id: 1, title: "Locality Review – Lajpat Magar, New...", image: locality1 },
    { id: 2, title: "Locality Review – Rajouri Garden, New...", image: locality1 },
    { id: 3, title: "Locality Review – Saket, New...", image: locality1 },
    { id: 4, title: "Locality Review – Dwarka, New...", image: locality1 },
    { id: 5, title: "Locality Review – Rohini, New...", image: locality1 },
    { id: 6, title: "Locality Review – Janakpuri, New...", image: locality1 },
    { id: 7, title: "Locality Review – Lajpat Magar, New...", image: locality1 },
    { id: 8, title: "Locality Review – Rajouri Garden, New...", image: locality1 },
    { id: 9, title: "Locality Review – Saket, New...", image: locality1 },
    { id: 10, title: "Locality Review – Dwarka, New...", image: locality1 },
    { id: 11, title: "Locality Review – Rohini, New...", image: locality1 },
    { id: 12, title: "Locality Review – Janakpuri, New...", image: locality1 },
];

const RealEstateGuide = () => {
        const ref = useRef(null);
    const fadeVariants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.1, ease: "easeOut" },
        },
        hidden: {
            opacity: 0,
            x: -200,
            transition: { duration: 0.6, ease: "easeIn" },
        },
    };

    const isInView = useInView(ref, {
        once: true,
    });
    return (
        <motion.section
         ref={ref}
            variants={fadeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
         className="flex md:mx-4 mt-20 mb-20 flex-col justify-start md:px-6 py-8 font-[poppins]">
            <Heading label="Your Real Estate Guide" />

            <div className="w-full bg-white h-auto text-black p-3 rounded-xl shadow-md">
                <h4 className="text-sm font-bold mb-4">Rates & Trends</h4>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={12}
                        autoplay={{
                            delay: 2000,   
                            disableOnInteraction: false,  
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 35,
                            },
                        }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                        }}
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className="flex transform hover:scale-[1.1] transition-all flex-col items-start space-y-2 w-full px-1">
                                    <a href="#" className="w-full">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-[100%] h-[150px] rounded-md object-cover"
                                        />
                                    </a>
                                    <h6 className="text-sm font-medium leading-tight">{card.title}</h6>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Arrows */}
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                        <button className="custom-prev text-sm bg-white/50 px-2 py-1 rounded-full shadow hover:bg-gray-100">←</button>
                    </div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                        <button className="custom-next text-sm bg-white/50 px-2 py-1 rounded-full shadow hover:bg-gray-100">→</button>
                    </div>
                </div>

                {/* Custom Pagination Dots */}
                <div className="custom-pagination mt-4 flex justify-center space-x-1"></div>
            </div>
        </motion.section>
    );
};

export default RealEstateGuide;