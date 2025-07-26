import React from 'react'

const Features = () => {
    return (
        <>
            <div style={{ backgroundColor: '#8C2841' }} className="mt-8 mb-8 flex mx-8 bg-rosewood max-w-[1840px] mx-auto h-auto md:rounded-3xl items-center justify-center m-2 sm:m-5 p-0 overflow-hidden">
                <div className="flex flex-col w-[90%] mx-auto  lg:flex-row items-center justify-between gap-6 md:gap-[3.75rem] py-8 px-4md:px-8">
                    <div className="flex flex-col w-full gap-6 md:gap-[3.75rem] w-full lg:w-auto p-2">
                        <div className="relative p-1">
                            <img src="comprehensive_consultancy.png" className="w-full h-auto sm:h-[19.25rem] bg-zinc-300 rounded-2xl" />
                            <div className="absolute bottom-[1rem] left-0 right-0 mx-auto w-[90%] text-center text-white text-sm sm:text-xl font-bold bg-black/10 p-1 sm:p-2 rounded">
                                Comprehensive Consultancy
                            </div>
                        </div>
                        <div className="relative p-1">
                            <img src="payment.png" className="w-full h-auto sm:h-[12.75rem] bg-zinc-300 rounded-2xl" />
                            <div className="absolute bottom-[1rem] left-0 right-0 mx-auto w-[90%] text-center text-white text-sm sm:text-xl font-bold bg-black/10 p-1 sm:p-2 rounded">
                                Flexible Payment Model
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 md:gap-[3.75rem] w-full lg:w-auto">
                        <div className="relative p-1">
                            <img src="arvr.png" className="w-full h-auto sm:h-[11.5rem] bg-zinc-300 rounded-2xl" />
                            <div className="absolute bottom-[1rem] left-0 right-0 mx-auto w-[90%] text-center text-white text-sm sm:text-xl font-bold bg-black/15 p-1 sm:p-2 rounded">
                                AR/VR Property
                            </div>
                        </div>
                        <div className="relative p-1">
                            <img src="blockchain.png" className="w-full h-auto sm:h-[20.5rem] bg-zinc-300 rounded-2xl" />
                            <div className="absolute bottom-[1rem] left-0 right-0 mx-auto w-[90%] text-center text-white text-sm sm:text-xl font-bold bg-black/15 p-1 sm:p-2 rounded">
                                Blockchain-Backed Transaction
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col p-1 gap-6 md:gap-[3.75rem] relative w-full lg:w-auto">
                        <img src="monetisation.png" className="w-full h-auto sm:h-[35.75rem] bg-zinc-300 rounded-2xl" />
                        <div className="absolute bottom-[1rem] left-0 right-0 mx-auto w-[90%] text-center text-white text-sm sm:text-xl font-bold bg-black/15 p-1 sm:p-2 rounded">
                            Monetisation of Existing Properties
                        </div>
                    </div>

                    {/* <div className="flex flex-col gap-6 md:gap-[3.75rem] relative w-full lg:w-auto">
                        <div className="w-full h-auto sm:h-[35.75rem] bg-gradient-to-b from-amber-300 to-rose-100 rounded-2xl" />
                        <div className="absolute top-[1.5rem] left-[3.5rem] text-black text-2xl md:text-3xl font-extrabold p-2 rounded">
                            Want to Sell your Property?
                        </div>
                        <button className="absolute top-[8rem] left-[3.75rem] bg-[#6C1E3C] w-[80%] sm:w-[20.25rem] h-[3.5rem] text-white text-xl md:text-2xl rounded-lg font-bold p-2">Post a property</button>
                        <img src="hooman.png" className="absolute top-[9rem] h-auto w-[80%] w-full" />
                    </div> */}
                </div>
            </div>

            <div className="relative h-[15rem] md:m-[1.25rem] mb-[2.5rem mx-8]">
                <img
                    src="arvr.png"
                    className="w-full h-full object-cover bg-zinc-300 md:rounded-3xl"
                />
                <div className="absolute inset-0 p-4 md:p-[2.5rem] flex items-end justify-end">
                    <div className="px-3 py-2 md:px-[1.75rem] md:py-[1rem] bg-gradient-to-l from-orange-400 to-amber-400 rounded-lg hover:scale-105 duration-500 shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-[0.625rem] overflow-hidden">
                        <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden">
                            <img src="call.svg" className="w-[1.25rem] h-[1.25rem] left-[1.68px] top-[2px] absolute" />
                        </div>
                        <button className="text-black text-base md:text-xl font-bold leading-tight whitespace-nowrap ">Take a AR/VR Tour</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features