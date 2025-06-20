
export const ServicesCards = () => {
    return (
    <div className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        <div className="bg-pink-800 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center">
            <div className="">
                <img src="./buyHome.png" alt="List Icon" className="h-[190px] w-[190px]" />
            </div>
            <p className="text-sm mb-4 mt-4">
               Find your place with an immersive photo experience and the most listings,including things you won’t find anywhere else
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 hover:scale-105 hover:shadow-lg text-rose-900 text-md font-bold py-2 px-6 rounded-full transition-transform duration-300">
                Buy a home
            </button>
        </div>
        <div className="bg-pink-800 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center">
            <div className="">
                <img src="./listProperty.png" alt="List Icon" className="h-[220px] w-[220px]" />
            </div>
            <p className="text-sm mb-4">
                No matter what path you take to sell your home, we can help you navigate a successful rate
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 hover:scale-105 hover:shadow-lg text-rose-900 text-md font-bold py-2 px-6 rounded-full transition-transform duration-300">
                List Your Property
            </button>
        </div>
        <div className="bg-pink-800 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center">
            <div className="">
                <img src="./rentHome.png" alt="Rent Icon" className="h-[210px] w-[240px]" />
            </div>
            <p className="text-sm mb-4">
                No matter what path you take to sell your home, we can help you navigate a successful rate
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 hover:scale-105 hover:shadow-lg text-rose-900 text-md font-bold py-2 px-6 rounded-full transition-transform duration-300">
                Rent a Home
            </button>
        </div>
        </div>
    </div>
    );
};