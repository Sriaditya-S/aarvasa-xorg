
import { FilterContext } from "../../../context/FilterProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const ServicesCards = () => {
    const navigate = useNavigate();
    const {filters, setFilters} = useContext(FilterContext);
    const handlePage = (param) => {
      if(param === "R"){
          setFilters((prev) => ({
            ...prev,
            "transactionType" : "Rent"
        }))
        navigate("listings");
      }
      else{
         if(param === "B"){
          setFilters((prev) => ({
            ...prev,
            "transactionType" : "New Property"
        }))
        navigate("listings");
      }
      }
    }
    return (
        <div className="px-6 mt-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            <div className="bg-gradient-to-b from-[#DBB025] via-[#A38321] via-[#7F671E] via-[#5B4A1B] to-[#2b2b2b] text-white p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="">
                    <img src="./buyHome.png" alt="List Icon" className="h-[150px] w-[150px]" />
                </div>
                <p className="text-sm mb-4 mt-4">
                   Find your place with an immersive photo experience and the most listings,including things you won’t find anywhere else
                </p>
                <button onClick={() => handlePage("B")} className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 hover:scale-105 hover:shadow-lg text-rose-900 text-md font-bold py-2 px-6 rounded-full transition-transform duration-300">
                    Buy a home
                </button>
            </div>
            <div className="bg-gradient-to-b from-[#DBB025] via-[#A38321] via-[#7F671E] via-[#5B4A1B] to-[#2b2b2b] text-white p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="-mt-14">
                    <img src="./listProperty.png" alt="List Icon" className="h-[250px] w-[250px]" />
                </div>
                <p className="text-sm -mt-4 pb-6">
                    No matter what path you take to sell your home, we can help you navigate a successful rate
                </p>
                <Link to={"/addListing"}>
                <button className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 hover:scale-105 hover:shadow-lg text-rose-900 text-md font-bold py-2 px-6 rounded-full transition-transform duration-300">
                    List Your Property
                </button>
                </Link>
            </div>
            <div className="bg-gradient-to-b from-[#DBB025] via-[#A38321] via-[#7F671E] via-[#5B4A1B] to-[#2b2b2b] text-white p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="-mb-8 -mt-10">
                    <img src="./rentHome.png" alt="Rent Icon" className="h-[250px] w-[280px]" />
                </div>
                <p className="text-sm mb-4">
                    No matter what path you take to sell your home, we can help you navigate a successful rate
                </p>
                <button onClick={() => handlePage("R")} className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 hover:scale-105 hover:shadow-lg text-rose-900 text-md font-bold py-2 px-6 rounded-full transition-transform duration-300">
                    Rent a Home
                </button>
            </div>
            </div>
        </div>
    );
};