import React, { useEffect, useState } from 'react';
import { Heading } from '../Utils/Heading';

const Slider = () => {
    const [curr, setCurr] = useState(null);

    const reviews = [
        {
            name: "Rahul Sharma",
            uname: "@rahul_s",
            content: "Aarvasa helped me find my dream home within my budget. The team was professional and responsive throughout the process.",
            stars: "★★★★★",
            image: "https://images.pexels.com/photos/14993982/pexels-photo-14993982.jpeg ",
            time: "2 weeks ago"
        },
        {
            name: "Priya Patel",
            uname: "@priya2023",
            content: "The property insights provided by Aarvasa were incredibly detailed and helped me make an informed decision.",
            stars: "★★★★☆",
            image: "https://images.pexels.com/photos/32160999/pexels-photo-32160999.jpeg",
            time: "2 weeks ago"
        },
        {
            name: "Arjun Kapoor",
            uname: "@arjunK",
            content: "The property insights provided by Aarvasa were incredibly detailed and helped me make an informed decision.",
            stars: "★★★★★",
            image: "https://thumbs.dreamstime.com/z/young-indian-man-smiling-park-88123456.jpg",
            time: "2 weeks ago"
        }
    ];

    useEffect(() => {
        console.log(curr);
    }, [curr]);

    return (
        <div className="relative md:px-8 md:py-10 font-[poppins] mx-2 md:mx-8 overflow-hidden">
            <Heading label="What Our Clients Say" />

            {/* Scrollable Snap Slider */}
          

            {/* Auto Sliding Review Carousel */}
            <div className="mt-12">
                <div className="group overflow-hidden">
                    <div className="flex gap-6 animate-slide group-hover:[animation-play-state:paused] w-max">
                        {[...reviews, ...reviews].map((item, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setCurr(index)}
                                className="bg-[#692034] rounded-xl hover:border shadow-lg p-6 flex-shrink-0 w-[290px] md:w-[480px] transform transition-transform duration-300 hover:scale-[.9]"
                            >
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-red-800"
                                        />
                                        <div className="flex flex-col">
                                            <div className="text-lg font-bold text-white">{item.name}</div>
                                            <div className="text-sm text-white">{item.uname}</div>
                                        </div>
                                    </div>
                                    <div className="text-white">"{item.content}"</div>
                                    <div className="flex justify-between">
                                        <div className="text-amber-500 text-base">{item.stars}</div>
                                        <div className="text-white text-base">{item.time}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
