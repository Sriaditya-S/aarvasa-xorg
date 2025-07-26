import React, { useState } from 'react'
import { useRef } from 'react';
import { Heading } from '../Utils/Heading'
import { Star } from 'lucide-react'
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Preferred = () => {
    const ref = useRef(null);
    const [data, setData] = useState([
        {
            id: 1,
            img: "/p-1.jpg",
            title: "Sobha Hearland II Villas",
            desc: "Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc",
            ratings: 4.6
        },
        {
            id: 2,
            img: "/p-2.png",
            title: "Sobha Hearland II Villas",
            desc: "Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc",
            ratings: 4.6
        },
        {
            id: 3,
            img: "/p-3.png",
            title: "Sobha Hearland II Villas",
            desc: "Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc",
            ratings: 4.6
        }
        ,
        {
            id: 4,
            img: "/p-1.jpg",
            title: "Sobha Hearland II Villas",
            desc: "Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc",
            ratings: 4.6
        },

    ])
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
        <motion.div
            className="mx-2 mt-8 mb-8 md:mx-4 relative">
            <Heading label="Aarvasa Preferred Agents in New Delhi" />
            <div className="rows flex flex-col gap-20">
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                    {[1, 2, 3].map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[45%] md:w-[26%] lg:w-[28%] cursor-pointer h-auto bg-black rounded-xl border border-2 border-[#F9BC61] hover:scale-[1.02] duration-500"
                        >
                            <div className="w-full h-auto bg-gradient-to-r from-[#D99D3A] to-[#80602D] rounded-t-xl flex flex-wrap sm:flex-nowrap p-2 sm:p-3 justify-between items-center">
                                <img className="w-14 sm:w-16 h-14 sm:h-16 rounded-md" src="vivek_kumar.png" />
                                <div className="flex flex-col justify-end items-start ml-2 gap-1 mt-2 sm:mt-0">
                                    <div className="text-pink-900 text-sm sm:text-base font-bold">Av Preferred</div>
                                    <div className="text-white text-base sm:text-lg font-bold">Vivek Kumar Mishra</div>
                                </div>
                                <img className="w-8 sm:w-10 h-7 sm:h-8 rounded-[6px] mt-2 sm:mt-0" src="pref.png" />
                            </div>

                            <div className="flex justify-between items-center mx-3 flex-wrap gap-2 sm:gap-4 p-2 sm:p-3 items-end">
                                <img className="w-10 sm:w-12 h-10 sm:h-12 rounded-[2px]" src="mvprop.png" />
                                <div className="flex flex-col items-start">
                                    <div className="text-white text-sm sm:text-base font-semibold">Mv Properties</div>
                                    <div className="text-white text-[10px] sm:text-xs font-medium">Operating Since</div>
                                    <div className="text-white text-[10px] sm:text-xs font-medium">2006</div>
                                </div>
                                <div className="hidden sm:block w-[1px] h-7 bg-white"></div>
                                <div className="flex flex-col justify-between items-start">
                                    <div className="text-white text-[10px] sm:text-xs font-medium">Buyers Served</div>
                                    <div className="text-white text-[10px] sm:text-xs font-medium">2500+</div>
                                </div>
                            </div>

                            <div className="w-full h-[0.5px] bg-white"></div>

                            <div className="flex mx-3 justify-between items-center flex-wrap p-2 sm:p-3 items-start gap-2 sm:gap-4 mt-1">
                                <div className="flex flex-col">
                                    <div className="text-white text-sm sm:text-base font-semibold">45</div>
                                    <div className="text-white text-[10px] sm:text-xs font-medium">Properties for Sale</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white text-sm sm:text-base font-semibold">3</div>
                                    <div className="text-white text-[10px] sm:text-xs font-medium">Properties For Rent</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* row 2  */}
                <div className='card flex items-center justify-center w-full mx-auto lg:px-20'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}

                        breakpoints={{
                            640 : {
                                slidesPerView : 2,
                            },
                            1080 : {
                                slidesPerView : 3,
                                spaceBetween : 20,
                            },
                          
                          
                        }}

                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        {data.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className="card p-2 h-[450px] bg-[#949494] shadow-lg rounded-lg">
                                    <img src={card.img} className='w-full max-h-[250px] min-h-[250px] object-cover' alt="" />
                                    <h1 className='text-lg m-2 font-semibold'>{card.title}</h1>
                                    <p className='max-w-[600px] m-2 font-[500] text-sm mt-4'>{card.desc}</p>

                                    <div className="details flex items-center gap-2 m-2">
                                        <div className="star flex items-center gap-2">
                                            {[1, 2, 3, 4, -1].map((currElem, index) => {
                                                   return(
                                                     <Star key={index} size={16} color='orange' fill={currElem > 0 ? 'orange' : 'white'}></Star>
                                                   )
                                            })}
                                        </div>
                                        <div className="text">
                                            <span>{card.ratings} / 5</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="custom-pagination mt-12 flex justify-center"></div>

                            </SwiperSlide>
                        ))}
                    </Swiper>



                </div>
            </div>
        </motion.div>
    )
}

export default Preferred