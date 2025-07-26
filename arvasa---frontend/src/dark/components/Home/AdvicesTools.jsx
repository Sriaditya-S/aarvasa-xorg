// import React from "react";
// import locality1 from "../../assets/Your Real Estate Guide 1.jpg"
// import { Heading } from "../Utils/Heading";

// const AdvicesTools = () => {
//     return (
//         <section className="flex md:mx-4 mt-20 mb-20 flex-col justify-start md:px-6 md:py-8 p-2 font-[poppins] w-full">
//             <Heading label="Advise and tools" width={"190"} />

//             <div className="cards flex items-center justify-center flex-wrap lg:flex-nowrap gap-8">
//                 <div
//                     className="relative w-full max-w-sm text-white p-6 rounded-xl shadow-md bg-cover bg-center hover:scale-105 duration-500"
//                     style={{
//                         backgroundImage: `url(${locality1})`,
//                     }}
//                 >
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl" />

//                     {/* Content above the overlay */}
//                     <div className="relative z-10">
//                         <h4 className="text-sm font-bold mb-2">Rates & Trends</h4>
//                         <p className="text-sm mb-4">
//                             Know all about property Rates & Trends in your City
//                         </p>
//                         <a
//                             href="#"
//                             className="text-yellow-400 font-medium inline-flex items-center hover:underline"
//                         >
//                             View Now <span className="ml-1">→</span>
//                         </a>
//                     </div>
//                 </div>

//                 <div
//                     className="relative w-full max-w-sm text-white p-6 rounded-xl shadow-md bg-cover bg-center hover:scale-105 duration-500"
//                     style={{
//                         backgroundImage: `url(${locality1})`,
//                     }}
//                 >
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl" />

//                     {/* Content above the overlay */}
//                     <div className="relative z-10">
//                         <h4 className="text-sm font-bold mb-2">Rates & Trends</h4>
//                         <p className="text-sm mb-4">
//                             Know all about property Rates & Trends in your City
//                         </p>
//                         <a
//                             href="#"
//                             className="text-yellow-400 font-medium inline-flex items-center hover:underline"
//                         >
//                             View Now <span className="ml-1">→</span>
//                         </a>
//                     </div>
//                 </div>

//                 <div
//                     className="relative w-full max-w-sm text-white p-6 rounded-xl shadow-md bg-cover bg-center hover:scale-105 duration-500"
//                     style={{
//                         backgroundImage: `url(${locality1})`,
//                     }}
//                 >
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl" />

//                     {/* Content above the overlay */}
//                     <div className="relative z-10">
//                         <h4 className="text-sm font-bold mb-2">Rates & Trends</h4>
//                         <p className="text-sm mb-4">
//                             Know all about property Rates & Trends in your City
//                         </p>
//                         <a
//                             href="#"
//                             className="text-yellow-400 font-medium inline-flex items-center hover:underline"
//                         >
//                             View Now <span className="ml-1">→</span>
//                         </a>
//                     </div>
//                 </div>

//                 <div
//                     className="relative w-full max-w-sm text-white p-6 rounded-xl shadow-md bg-cover bg-center hover:scale-105 duration-500"
//                     style={{
//                         backgroundImage: `url(${locality1})`,
//                     }}
//                 >
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl" />

//                     {/* Content above the overlay */}
//                     <div className="relative z-10">
//                         <h4 className="text-sm font-bold mb-2">Rates & Trends</h4>
//                         <p className="text-sm mb-4">
//                             Know all about property Rates & Trends in your City
//                         </p>
//                         <a
//                             href="#"
//                             className="text-yellow-400 font-medium inline-flex items-center hover:underline"
//                         >
//                             View Now <span className="ml-1">→</span>
//                         </a>
//                     </div>
//                 </div>

//             </div>



//         </section>
//     );
// };

// export default AdvicesTools;








import React from "react";
import RatesTrendsIcon from "/assets/AdvicesRatesandTrends.png";
import EmiIcon from "/assets/AdvicesEMI.png";
import BudgetIcon from "/assets/AdvicesBudget.png";
import AreaIcon from "/assets/AdvicesArea.png";
import HomeLoanIcon from "/assets/AdvicesHomeLoan.png";
import { Heading } from "../Utils/Heading";
import { Link } from "react-router-dom";


const ToolCard = ({ icon, title, description }) => {
    return (
        <div
            className="flex-shrink-0 flex flex-col justify-center p-5 rounded-xl border-[#8C2841] border-[4px] bg-gradient-to-b from-[#fff2bc] via-[#FADC64] to-[#F5BA22] shadow-md hover:scale-105 transition-transform duration-300 w-64 h-72 mr-6"
        >
            <div>
                <img src={icon} alt={title} className="w- h-12 mb-4" />
                <h3 className="text-xl font-semibold text-[#8C2841] mb-2">{title}</h3>
                <p className="text-sm text-black">{description}</p>
            </div>
        </div>
    );
};

const AdvicesTools = () => {
    const tools = [
        {
            icon: RatesTrendsIcon,
            title: "Rates & Trends",
            description: "Know all about property Rates & Trends in your City",
            path: "/listings/ratestrends",
        },
        {
            icon: EmiIcon,
            title: "EMI calculator",
            description: "Quickly estimate your monthly home loan payments.",
            path : "/tools/EMIcalculator"
        },
        {
            icon: BudgetIcon,
            title: "Budget calculator",
            description: "Plan your property budget based on your finances.",
            path : "/tools/budgetcalculator"
        },
        {
            icon: AreaIcon,
            title: "Area predictor",
            description: "Find the best locality that meets your needs.",
            path : "tools/areaconverter"
        },
        {
            icon: HomeLoanIcon,
            title: "Home loan eligibility",
            description: "Check the eligibility and how much instantly.",
            path : "tools/homeloaneligibility"
        },
    ];

    return (
        <section className="flex mx-2 mt-8 mb-8 md:mx-4 relative flex-col justify-start md:px-6 md:py-8 font-[poppins] w-full">
            <Heading label="Advise and tools" width={"190"} />

            <div className="overflow-x-auto py-4 scrollbar-hide">
                <div className="flex flex-nowrap px-5">
                    {tools.map((tool, index) => (
                        <Link to={tool.path} key={index}>
                            <ToolCard
                                key={index}
                                icon={tool.icon}
                                title={tool.title}
                                description={tool.description}
                            /></Link>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default AdvicesTools;
