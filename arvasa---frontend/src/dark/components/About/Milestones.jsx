import React from 'react'
import { Heading } from '@/dark/components/Utils/Heading.jsx'

const Milestones = () => {

    const timeline = [
        { month: "May", content: "Team Formation and Initial Planning" },
        { month: "June", content: "MVP Development Kickoff" },
        { month: "July", content: "Strategic Partnerships" },
        { month: "August", content: "MVP Testing Phase" },
        { month: "September", content: "Beta Launch with Core Features" },
        { month: "October", content: "Beta Launch with Core Features" },
        { month: "November", content: "Team Formation and Initial Planning" },


    ]


    return (
        <div className="relative px-2 mx-2 mt-8 mb-8 md:mx-8 py-10 font-[poppins]" >
            <Heading label="Milestones and Future Plans" />
            <div className="relative w-auto">

                <div className="font-[poppins] font-medium text-3xl mt-2 mb-2">2024</div>
                <div className="overflow-x-auto whitespace-nowrap  rounded-xl"
                    style={{
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none'
                    }}>
                    <div className="flex gap-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex flex-col items-start gap-2 justify-start">
                                <div className="text-yellow-500 flex items-center justify-center gap-2">
                                    <div className="text-3xl cursor-pointer">⭐</div>
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                                    <div className="w-2 h-2 bg-amber-300 rounded-full" />


                                </div>
                                <div className="text-center justify-start text-white text-3xl font-medium font-['Poppins'] leading- mt-3">{item.month}</div>
                                <div className="w-56 justify-start text-white text-xl font-medium font-['Poppins'] break-words whitespace-normal leading-snug mt-3 flex gap-1">
                                    <div>•</div>
                                    <div>
                                        <p className='text-sm font-semibold'>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Milestones