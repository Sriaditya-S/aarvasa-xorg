import React, { useState } from 'react';
import Slider from '../About/Slider';
import Nearby from '../../components/Nearby';
import { Explore } from "../../components/PropertyBrief/Explore"
import { Heading } from '../Utils/Heading';
import Sale from '../PropertyBrief/Sale';

const amenitiesData = [
    {
        title: "Interior",
        icon: <img src="/interior.png" alt="Interior Icon" className="h-12 w-12" />,
        content: [
            "Modular kitchen with chimney",
            "False ceiling with LED lighting",
            "Built-in wardrobes in bedrooms",
            "Wooden flooring in master bedroom",
        ],
    },
    {
        title: "Finances",
        icon: <img src="/finance.png" alt="Finances Icon" className="h-12 w-12" />,
        content: [
            "0% interest for first 6 months",
            "EMI options available",
            "Eligible for home loan",
            "Flexible down payment plans",
        ],
    },
    {
        title: "Exterior",
        icon: <img src="/exterior.png" alt="Exterior Icon" className="h-12 w-12" />,
        content: [
            "Landscaped gardens",
            "Children's play area",
            "Ample parking space",
            "Rainwater harvesting system",
        ],
    },
    {
        title: "Utilities",
        icon: <img src="/utilities.png" alt="Utilities Icon" className="h-12 w-12" />,
        content: [
            "Water supply: 24 hrs",
            "Electricity supply: 24 hrs",
            "Backup generator",
            "Gas pipeline connection",
            "Water supply: 24 hrs",
            "Electricity supply: 24 hrs",
            "CCTV surveillance",
            "Intercom facility",
        ],
    },
    {
        title: "Others",
        icon: <img src="/other.svg" alt="Others Icon" className="h-12 w-12" />,
        content: [
            "Clubhouse with gym",
            "Swimming pool",
            "Community hall",
            "Gated community with security",
        ],
    },
];


const PropertyBrief = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const [isEastFacingChecked, setIsEastFacingChecked] = useState(true);
    const [isNewlyConstructedChecked, setIsNewlyConstructedChecked] = useState(true);

    const handleEastFacingChange = () => {
        setIsEastFacingChecked(!isEastFacingChecked);
    };

    const handleNewlyConstructedChange = () => {
        setIsNewlyConstructedChecked(!isNewlyConstructedChecked);
    };

    return (
        <div className="p-4 md:p-8 font-poppins">
            {/* Top Section */}
           
        </div>
    );
};

export default PropertyBrief;


//  <div className="w-full md:w-[50%] mb-6 flex flex-col gap-2">
//                 <h1 className="text-3xl md:text-5xl font-bold text-[#3D3D3D]">Big city Residential Project</h1>
            
//                 <p className="text-[#3d3d3d3] mt-2 mb-2 text-lg md:text-xl">Calulate property Value Using AI</p>
//                 <p className="text-lg md:text-xl font-semibold text-[#3D3D3D]">3 BHK Flat For Sale in Omkar Signet, Malad East, New Delhi</p>
//             </div>

//             <div className="flex flex-col h-[330px] md:flex-row gap-4 mb-6 h-full w-full md:w-3/4 mx-auto">
//                 <div className="w-full md:w-2/3 rounded-3xl overflow-hidden h-full">
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIg67ppTVP1Zt6tIikFl-as56RhrWoDx_nMg&s" alt="Residential Project" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
//                 </div>

//                 <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4">
//                     <div className="rounded-3xl overflow-hidden h-full">
//                         <img src="https://snworksceo.imgix.net/cav/8d443aec-2090-4e9e-8793-6b95d830d89f.sized-1000x1000.JPG?w=1000" alt="Gym" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
//                     </div>
//                     <div className="rounded-3xl overflow-hidden h-full">
//                         <img src="https://media.istockphoto.com/id/149360161/photo/manicured-house-and-garden.jpg?s=612x612&w=0&k=20&c=QM7ussZ_9IjiMbUUIusbKmXNRgTYy__C1XpZnQx2BKQ=" alt="Outdoor Area" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
//                     </div>
//                 </div>
//             </div>

//             {/* Property Details  */}
//              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-around text-lg md:text-xl font-semibold text-[#3D3D3D] w-full md:w-3/4 mx-auto mb-6">
//                <Sale></Sale>
//             </div>

//             {/* <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-around text-lg md:text-xl font-semibold text-[#3D3D3D] w-full md:w-3/4 mx-auto mb-6">
               
//             </div> */}

//             <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mt-6 w-full mx-auto">
//                 <Explore></Explore>
//             </div>

//             {/* Additional Property Details */}


//             <div className="p-5">
//                 <Heading label="Amenities" />
//                 <div className="space-y-2 max-w-4xl mx-auto">
//                     {amenitiesData.map((item, index) => (
//                         <div key={index}>
//                             <div
//                                 className={`flex justify-between items-center pt-4 cursor-pointer ${index !== 0 ? "border-t" : ""}`}
//                                 onClick={() => toggleSection(index)}
//                             >
//                                 <div className="flex items-center space-x-5 pb-5 font-medium">
//                                     <span className="text-xl">{item.icon}</span>
//                                     <span className='text-xl'>{item.title}</span>
//                                 </div>
//                                 <span className="text-xl">
//                                     {openIndex === index ? <img src="/up.png" alt="Collapse" className="h-8 w-8" /> : <img src="/down.png" alt="Expand" className="h-8 w-8" />}
//                                 </span>
//                             </div>

//                             {openIndex === index && item.content.length > 0 && (
//                                 <div className="p-4 bg-white shadow-md rounded-lg font-semibold grid grid-cols-2 gap-x-20 gap-y-2 text-md font-light text-gray-800">
//                                     {item.content.map((line, i) => (
//                                         <div key={i} className="flex justify-start ml-24 space-x-2">
//                                             <span className="text-gray-500 text-xl">›</span>
//                                             <span>{line}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* More Detail Box */}
            
//             <Slider></Slider>