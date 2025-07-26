import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewAnimate = () => {
  const ref = useRef(null);
  const [dotTop, setDotTop] = useState(20);
  const [dotLeft, setdotLeft] = useState(85);
  const [image, setImage] = useState([]);
  const [currData, setCurrData] = useState(null);
  const [index, setactiveIndex] = useState(0);
  const isInView = useInView(ref, { once: false });
  const circleContainerRef = useRef(null);
  const buttonRefs = useRef([]);

  const fadeVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeOut", delay: 0.8 },
    },
    hidden: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  useEffect(() => {
    const getProperty = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/listings/random`
        );
        setImage(response.data.listings || []);
        setCurrData(response.data.listings?.[0] || null);
      } catch (err) {
        console.error("Error fetching property data", err);
      }
    };
    getProperty();
  }, []);



  const handleButtonClick = (index) => {
    const dotSettings = [
      { top: 20, left: 85 },
      { top: 95, left: 14 },
      { top: 180, left: -10 },
      { top: 260, left: 2 },
      { top: 354, left: 70 },
    ];

    if (image[index]) {
      setDotTop(dotSettings[index]?.top || 20);
      setdotLeft(dotSettings[index]?.left || 85);
      setCurrData(image[index]);
    }
  };

  if (!currData || image.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-gray-500 text-lg animate-pulse">Loading properties...</p>
      </div>
    );
  }

  return (
    currData ?     <div
      ref={ref}
      className="md:mx-8 mt-20 pt-8 mb-20 h-auto"
    >
      <div className="flex items-center flex-col-reverse justify-center space-y-8 mx-auto gap-8 md:gap-[20%] flex-col lg:flex-row">
        {/* Left Image & Circle */}
        <div
          ref={circleContainerRef}
          className="relative flex items-center justify-center"
          style={{ minHeight: "460px" }}
        >
          {/* Circle Button */}
          <Link to={"/listings"}>
            <div className="bg-yellow-500 rounded-full w-44 h-44 flex items-center hidden justify-center shadow-lg z-20 md:flex absolute top-1/2 left-[82%] -translate-y-1/2">
              <h1 className="font-bold text-center text-sm">View All Building</h1>
            </div>
          </Link>

          {/* Main Property Card */}
          <div className="relative p-5 border border-4 border-b-[#8C2841] border-l-[#8C2841] rounded-lg lg:w-[410px] p-1 bg-white shadow-lg min-h-[500px] z-[9]">
            <img
              src={currData.imageUrls?.[0]}
              className="w-full h-[290px] p-1 rounded-lg object-cover"
              alt="building"
            />
            <h1 className="text-2xl font-bold mt-2 px-2">{currData.propertyType}</h1>
            <p className="text-sm mt-2 px-2">
              {currData?.shortDescription?.length > 250
                ? `${currData.shortDescription.slice(0, 250)}... `
                : currData?.shortDescription}
              {currData?.shortDescription?.length > 100 && (
                <Link to={`/listings/propertydetails/${currData._id}`}>
                  <span className="text-blue-500 cursor-pointer">read more</span>
                </Link>
              )}
            </p>
            <Link to={`/listings/propertydetails/${currData._id}`}>
              <button
                className="p-2 rounded-md mt-3 w-full mx-2 mb-2 font-semibold"
                style={{
                  background: "linear-gradient(to right, #F7A240, #F5C01A)",
                }}
              >
                View property
              </button>
            </Link>
          </div>

          {/* Animated Circles */}
          <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-48 h-48 border-4 border-[#D75D87] rounded-full z-0"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute w-[300px] h-[300px] border-4 border-dashed border-[#D75D87] rounded-full z-0"
              ></motion.div>
              <div className="absolute w-[410px] h-[410px] border-4 border-[#D75D87] rounded-full z-0">
                <div
                  className="bg-yellow-500 w-4 h-4 rounded-full absolute z-10 transition-all duration-500"
                  style={{ top: dotTop, right: dotLeft }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="right_col p-4 w-fit sm:w-[40%] lg:w-[25%] flex flex-col gap-6 z-10">
          {image.map((btn, i) => (
            <button
              key={i}
              ref={(el) => (buttonRefs.current[i] = el)}
              onClick={() => {
                handleButtonClick(i);
                setactiveIndex(i);
              }}
              className={`text-left border border-1 border-[#D75D87] ${
                index === i
                  ? "bg-[#8C2841] text-black border-4 rotate-[5deg] transform hover:scale-[1.1]"
                  : ""
              } hover:bg-[#8C2841] hover:text-white transition-all px-4 py-2 rounded-md bg-white relative ${
                i === 1
                  ? "md:left-[30px]"
                  : i === 2
                  ? "md:left-[60px]"
                  : i === 3
                  ? "md:left-[30px]"
                  : ""
              }`}
            >
              <p className={`${index === i ? "text-[#D75D87] font-bold" : ""}`}>
                {btn.propertyTitle}
              </p>
              <p className={`${index === i ? "text-black" : ""}`}>{btn.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </div> : null
  );
};

export default ViewAnimate;
