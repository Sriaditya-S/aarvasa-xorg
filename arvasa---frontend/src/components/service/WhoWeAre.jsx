import React from "react";
import whoWeAreImage from "/assets/services_hero.png"; // Replace with your actual image path
import { Heading } from "../Utils/Heading";
const WhoWeAre = ({scrollService, scrollToContact}) => {
  return (
    <section className="font-[poppins] px-8 md:px-24 flex flex-col lg:flex-row flex-wrap items-center justify-center md:justify-between">
      {/* Left Content */}
      <div className="lg:w-1/2  mb-10 lg:mb-0">
        <Heading label="Who We Are"/>

        <div className="inline-block bg-[#FEEEB3] px-4 py-2 rounded-md text-sm font-semibold mb-4 animate-bounce duration-700">
          Built Dream And Securing Future
        </div>

        <h2 className="text-2xl md:text-5xl font-bold text-[#6C1E3C] leading-snug mb-4">
          All-inclusive Real Estate <br /> Solutions for Buyers & <br></br> Investors
        </h2>

        <p className="text-sm text-[#6C1E3C] max-w-md mb-6">
          Helping you find the perfect property or make smart investment decisions with expert guidance
        </p>

        <div className="flex gap-4">
          <button onClick={scrollToContact} className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold text-sm md:text-md px-6 py-2 rounded-md hover:scale-105 hover:shadow-lg transition duration-300">
            Contact Us
          </button>
          <button onClick={scrollService} className="border-2 border-[#6C1E3C] text-[#6C1E3C] font-semibold px-6 py-2 text-sm md:text-md rounded-md hover:bg-[#6C1E3C] hover:text-white transition duration-300">
            View Services
          </button>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="lg:w-1/2 w-full flex justify-center items-center animate">
        <img
          src={whoWeAreImage}
          alt="Who We Are Visual"
          className="w-full max-w-xl object-contain animate-pulse duration-1000"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
