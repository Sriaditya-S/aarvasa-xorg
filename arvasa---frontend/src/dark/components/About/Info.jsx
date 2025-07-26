import React from 'react';
import { delay, motion } from "framer-motion";
const slideFromRight = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.3,
        },
    },
};





const Info = ({scrollToContact}) => {
    return (
        <div className="relative h-auto px-2 overflow-hidden md:px-8 md:mx-8 font-[poppins]">
            {/* Heading */}
            <div className="mb-8">
                <div className="text-3xl font-[Poppins] font-medium pt-6 pb-4 text-white">
                    Who We Are
                    <hr className="w-[137px] h-[6px] border-0 mt-2 rounded-xl bg-pink-900" />
                </div>
            </div>

            {/* Who We Are Block */}
            <div className="flex relative flex-col md:px-8 lg:flex-row items-center justify-center gap-8">
                <div className="lg:block hidden w-[900px] lg:relative top-0 left-0 mb-4 lg:mb-0">
                    <img className="w-full lg:relative" src="aspect.png" alt="Person" />
                </div>
                <div className="w-full md:w-auto p-4 bg-gradient-to-r rounded-md from-[#CCAE4C] to-[#733037] md:rounded-[20px] h-full md:rounded-[32px] md:p-6 lg:p-12">
                    <p className="text-black text-xl leading-relaxed">
                        <span className="font-bold">So We Are Aarvasa, </span>
                        <span className="font-normal text-sm md:text-md">
                            we are more than just real estate professionals — we are your partners in creating a better future.
                            With a passion for helping individuals and families find their dream homes, we combine expertise,
                            integrity, and innovation to deliver exceptional results.
                            <br /><br />
                            Our team consists of seasoned professionals with deep roots in the community and a comprehensive
                            understanding of the real estate market. Whether you're buying your first home, upgrading to a larger
                            space, or investing in properties, we are dedicated to guiding you every step of the way.
                        </span>
                    </p>
                </div>
            </div>

            {/* Quote */}
            <div className="text-center text-white text-xl md:text-3xl mt-8 mb-8 font-bold font-['Poppins'] leading-13 md:m-12">
                “Connecting People with Perfect Properties and Smart Investments”
            </div>

            {/* Mission / Vision / Contact */}
            <div className="flex h-auto xl:h-[80vh] flex-wrap lg:flex-nowrap gap-4 lg:gap-[1.875rem] items-stretch mx-2 lg:mx-8">

                {/* LEFT SIDE */}
                <div className="flex flex-col gap-4 w-full lg:w-1/2 h-full">
                    <div className="bg-pink-800 p-6 rounded-2xl flex flex-col gap-4 h-full">
                        <div className="w-fit px-4 py-1 bg-amber-300 rounded-md text-pink-900 text-md md:text-xl font-medium">
                            Our Mission
                        </div>
                        <div className="text-white text-md font-medium font-['Poppins'] leading-8">
                            "To democratize real estate investments by offering innovative solutions like flexible payment plans, AR/VR property tours, and eco-conscious property insights, while providing a seamless experience for buyers, sellers, and renters to maximize their returns and achieve financial independence."
                        </div>
                    </div>

                    <div className="bg-pink-800 p-6 rounded-2xl flex flex-col gap-4 h-full">
                        <div className="w-fit px-4 py-1 bg-amber-300 rounded-md text-pink-900 text-md md:text-xl font-medium">
                            Our Vision
                        </div>
                        <div className="text-white text-md  font-medium font-['Poppins'] leading-8">
                            "To democratize real estate investments by offering innovative solutions like flexible payment plans, AR/VR property tours, and eco-conscious property insights, while providing a seamless experience for buyers, sellers, and renters to maximize their returns and achieve financial independence."
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <motion.div
                    variants={slideFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3, once: true }}
                    className="flex flex-col justify-around p-6 gap-8 md:gap-1 bg-[#C59F23] rounded-2xl w-full lg:w-1/2 h-full"
                >
                    <div className="flex flex-col justify-start items-start gap-4">
                        <span className="text-black text-3xl font-extrabold leading-normal">Aarvasa</span>
                        <span className="text-black text-md tracking-wide font-medium font-['Poppins'] leading-normal">
                            Simplifies Real Estate with Seamless Transactions, Investments, and Property Monetization
                        </span>
                        <button onClick={() => scrollToContact()} className="w-fit z-[99999] px-4 py-2 rounded-lg bg-gradient-to-l from-[#F5BC1E] to-[#F7A938] text-black text-xl font-semibold capitalize cursor-pointer border-black border-1">
                            Contact Us
                        </button>
                    </div>
                    <img className="w-full relative bottom-[50px] h-auto" src="housey.png" alt="House" />
                </motion.div>

            </div>
        </div>
    );
};

export default Info;
