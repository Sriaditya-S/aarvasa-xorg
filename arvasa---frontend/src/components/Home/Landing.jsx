import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Search, Home, IndianRupee, Earth } from 'lucide-react'
const Landing = () => {
    return (
        <div className='overflow-x-hidden py-4 px-2 md:mx-8 overflow-hidden flex w-auto flex-wrap lg:flex-nowrap h-full items-center justify-center md:justify-between md:px-4 rounded-lg lg:h-[80vh]' style={{
            background: "linear-gradient(to right, #F9EAF1, #8C2841)",
        }} >
            <div className='content md:py-auto'>
                <p className='text-[#692234] text-xl md:text-2xl'>Welcome to Aarvasa</p>
                <h1 className='text-[#692234] text-5xl lg:text-8xl font-bold mt-4 mb-8'>Manage your <br></br> property</h1>
                <p className='text-[#692234] text-sm md:text-lg mt-4 mb-8'>Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</p>
                <div className='bg-white w-auto mx-2 p-4 group hover:transform md:hover:scale-[1.03] transition-all flex flex-col rounded-lg z-[999] relative'>
                    <div className="tags flex items-center gap-2 flex-wrap">
                        <button className="tag1 hover:bg-[#8C2841] hover:text-white transition-all hover:transform hover:scale-[1.1] hover:rotate-[5deg] text-sm text-gray-700 flex items-center gap-2 border border-2 p-1 px-3 rounded-lg border-gray-300 shadow-md">
                            <Home size={22}></Home>
                            Buy
                        </button>

                        <button className="tag hover:bg-[#8C2841] hover:transform hover:scale-[1.1] hover:rotate-[5deg] hover:text-white transition-all text-sm text-gray-700 flex items-center gap-2 border border-2 p-1 px-3 rounded-lg border-gray-300 shadow-md">
                            <Home size={22}></Home>
                            Rent
                        </button>

                        <button className="tag text-sm text-gray-700 hover:bg-[#8C2841] hover:text-white hover:transform hover:scale-[1.1] hover:rotate-[5deg] transition-all flex items-center gap-2 border border-2 p-1 px-3 rounded-lg border-gray-300 shadow-md">
                            <Home size={22}></Home>
                            Plot
                        </button>

                        <button className="tag text-sm hover:bg-[#8C2841] hover:text-white transition-all hover:transform hover:scale-[1.1] hover:rotate-[5deg] text-gray-700 flex items-center gap-2 border border-2 p-1 px-3 rounded-lg border-gray-300 shadow-md">
                            <Home size={22}></Home>
                            PG
                        </button>

                        <button className="tag text-sm hover:bg-[#8C2841] hover:text-white transition-all hover:transform hover:scale-[1.1] hover:rotate-[5deg] text-gray-700 flex items-center gap-2 border border-2 p-1 px-3 rounded-lg border-gray-300 shadow-md">
                            <Home size={22}></Home>
                            Commercial
                        </button>

                        <button className="tag text-sm hover:bg-[#8C2841] hover:text-white transition-all hover:transform hover:scale-[1.1] hover:rotate-[5deg] text-gray-700 flex items-center gap-2 border border-2 p-1 px-3 rounded-lg border-gray-300 shadow-md">
                            <Home size={22}></Home>
                            Post a property
                        </button>

                    </div>
                    <hr className='mt-4 mb-4' />
                    <div className="searches flex items-center gap-8 flex-wrap lg:flex-nowrap">
                        <div className="search_bar w-full flex items-center gap-2 hover:text-[#8C2841]">
                            <MapPin></MapPin>
                            <input type="text" className='border-none w-full outline-none font-semibold' placeholder='Enter city, locality, project' />
                        </div>
                        <div className="property w-full flex items-center hover:text-[#8C2841]">
                            <Earth />
                            <select name="" id="" className='px-4 bg-white  w-full md:w-auto font-semibold '>
                                <option value="Property type">Property type</option>
                            </select>
                        </div>
                        <div className="budget w-full flex items-center gap-2 hover:text-[#8C2841]">
                            <IndianRupee></IndianRupee>
                            <select name="" id="" className='px-4 bg-white w-full font-semibold'>
                                <option value="budget">Budget</option>
                            </select>
                        </div>
                        <button className='flex w-full items-center justify-center gap-3 p-2 px-4 bg-gradient-to-r from-[#F7A240] to-[#F5C01A] group-hover:transition-all group-hover:transition-delay-[7s]  group-hover:from-[#FFFDF3] font-bold group-hover:text-white group-hover:bg-[#8C2841] rounded-lg' >
                            <Search />
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="image relative group w-[600px]">
                <img src="/images/shape1.png" className='absolute hidden md:block top-12 left-4 w-[200px]' alt="" />
                <img src="/images/shape2.png" className='absolute hidden md:block right-8 top-8  transform rotate-180 w-[210px]' alt="" />
                <img src="/images/shape3.png" className='absolute hidden md:block left-16 bottom-16 w-[210px]' alt="" />
                <img src="/images/shape4.png" className='absolute hidden md:block right-0 bottom-28 w-[210px]' alt="" />
                <motion.img
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{
                        duration: 2,       // total duration of one flicker cycle
                        repeat: Infinity,  // infinite loop
                        ease: "easeInOut"
                    }}
                    src="/images/hero.png"  className='w-full md:hover:transform hover:scale-[1.1] transition-all relative z-[999]' alt="" />
            </div>
        </div>
    )
}

export default Landing
