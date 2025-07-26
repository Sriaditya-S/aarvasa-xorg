import React, { useState } from 'react'
import { MoveRight } from 'lucide-react'
import { Heading } from '../Utils/Heading'
import { Link } from 'react-router-dom'
const Services = () => {
    const [data, setData] = useState([{
        img: "/s-1.png",
        text: "Comprehensive Consultancy Services"
    },
    {
        img: "/monitization.png",
        text: "Monetization of Existing Properties"
    },
    {
        img: "/s-2.jpg",
        text: "Flexible Payment Models"
    },
    {
        img: "/smartContract.png",
        text: "Smart Contracts"
    }
    ])
    return (
        <div className='mx-2 mt-8 mb-8 md:mx-4 relative'>
            <Heading label={"Services"}></Heading>
            <div className="cols flex md:w-[98%] mx-auto flex-wrap items-center justify-center lg:justify-between">
                <div className="left_col p-2 xl:w-[70%] py-8 rounded-lg bg-gradient-to-br gap-8 grid grid-cols-1 sm:grid-cols-2"
                    style={{
                        border: '2px solid transparent',
                        borderRadius: '0.5rem',
                        backgroundImage: 'linear-gradient(to bottom right, #3A3A3A, #A0A0A0), linear-gradient(to bottom right, #D9D9D9, #737373)',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box'
                    }}
                >
                    {data.map((currElem, index) => {
                        return (
                            <Link to={"/services"} key={index}>
                                <div key={index} className="flex gap-2 items-center md:min-w-[460px] justify-around p-4 md:m-2 h-[130px] bg-gradient-to-b from-[#DBB025] via-[#A38321] via-[#7F671E] via-[#5B4A1B] to-[#2b2b2b] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:shadow-gray-700">
                                    <img className='w-[100px] rounded-lg' src={currElem.img} alt="" />
                                    <h1>{currElem.text}</h1>
                                    <MoveRight></MoveRight>
                                </div></Link>
                        )
                    })}
                </div>
                <div className="right_col hidden lg:block">
                    {/* Platform div */}
                    {/* <div className="absolute w-[300px] h-[30px] bg-gradient-to-r from-[#8C2841] to-[#260B12] rounded-full shadow-lg xl:top-[570px] md:top-[690px] right-[75px] z-[998] opacity-80"></div> */}

                    {/* Slight shadow/reflection effect */}
                    <div className="absolute w-[280px] h-[10px] bg-black/30 rounded-full blur-sm xl:top-[585px] md:top-[845px] right-[145px] z-[997]"></div>


                    <div className="xl:absolute lg:top-[100px] xl:top-[-10px] md:top-[140px] right-[50px] z-[9999]">
                        {/* Main thought bubble */}
                        <Link to={"/chat"}> 
                        <div className="p-4 rounded-[40px] shadow-md bg-[#d3d3d3] w-[180px] relative">
                           
                          <p className="text-sm z-[99] text-gray-800 font-medium text-center">Need help finding your dream home?</p>
                            


                            {/* Thought bubble circles */}
                            <div className="absolute bottom-[-15px] left-[15px] w-[15px] h-[15px] rounded-full bg-[#d3d3d3]  shadow-sm"></div>
                            <div className="absolute bottom-[-30px] left-[5px] w-[10px] h-[10px] rounded-full bg-[#d3d3d3]  shadow-sm"></div>
                            <div className="absolute bottom-[-40px] left-[-5px] w-[6px] h-[6px] rounded-full bg-[#d3d3d3]  shadow-sm"></div>
                        </div>
                            </Link>
                    </div>

                    {/* Existing man image */}
                    <img src="/man.svg" className='relative xl:absolute w-[450px] xl:right-[60px] xl:top-[-20px]' alt="" />

                    {/* <svg viewBox="0 0 180 180" className='absolute z-[99] transform rotate-[360deg] right-[90px] xl:top-[-40px] md:top-[120px] right-0 w-[300px]' xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8C2841" />
                                <stop offset="100%" stopColor="#260B12" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#myGradient)" d="M48.8,-74.3C63.6,-66.5,76.2,-53.5,82.3,-38.2C88.4,-22.8,88.1,-5.1,79.8,7.3C71.5,19.7,55.2,26.7,43.1,33.2C31,39.8,23.1,45.9,12.1,55.7C1.1,65.5,-13.1,79.1,-23,76.9C-33,74.7,-38.7,56.6,-46.8,43C-54.9,29.3,-65.3,20.1,-66.4,9.8C-67.6,-0.5,-59.4,-11.9,-53.9,-24.9C-48.5,-37.9,-45.8,-52.4,-37.2,-63.1C-28.7,-73.8,-14.3,-80.6,1.3,-82.7C17,-84.8,34,-82.1,48.8,-74.3Z" transform="translate(100 100)" />
                    </svg> */}
                    {/* <Link to={"/chat"}>
                        <h1 className='z-[999] absolute xl:top-[30px] md:top-[240px] lg:top-[] text-center right-[130px] text-2xl text-white'>Chat with ai <br /> bot</h1>
                    </Link> */}

                </div>

                {/* <div className="right_col md:block">
                    <img src="/man.svg" className='z-[999]' alt="" />
                      <svg viewBox="0 0 200 200" className='absolute z-[99] top-[-60px] right-0 w-[400px]' xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#8C2841" />
                                <stop offset="100%" stop-color="#260B12" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#myGradient)" d="M48.8,-74.3C63.6,-66.5,76.2,-53.5,82.3,-38.2C88.4,-22.8,88.1,-5.1,79.8,7.3C71.5,19.7,55.2,26.7,43.1,33.2C31,39.8,23.1,45.9,12.1,55.7C1.1,65.5,-13.1,79.1,-23,76.9C-33,74.7,-38.7,56.6,-46.8,43C-54.9,29.3,-65.3,20.1,-66.4,9.8C-67.6,-0.5,-59.4,-11.9,-53.9,-24.9C-48.5,-37.9,-45.8,-52.4,-37.2,-63.1C-28.7,-73.8,-14.3,-80.6,1.3,-82.7C17,-84.8,34,-82.1,48.8,-74.3Z" transform="translate(100 100)" />
                    </svg>
                    <h1 className='z-[999] absolute top-[60px] text-center right-[70px] text-4xl text-white'>Chat with ai <br/> bot</h1>

                </div> */}

            </div>
        </div>
    )
}

export default Services
