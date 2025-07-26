import { FiMapPin, FiSearch } from "react-icons/fi";

export function ShowTrends() {
  return (
    <div className="flex items-center flex-wrap justify-center md:justify-between mt-10">
      <div className="flex items-center flex-wrap bg-yellow-300 p-2 md:p-auto gap-4 rounded-3xl md:p-2 w-full md:max-w-3xl mx-2 md:ml-10 shadow-sm">
        <FiMapPin className="text-lg text-black ml-4 mr-3" />
        <input
          type="text"
          placeholder="Enter City, Locality, Project"
          className="flex-1 font-[Poppins] bg-transparent outline-none text-gray-600 text-lg placeholder-gray-400"
        />
        <button className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-2xl px-5 w-full md:w-fit py-2 md:py-3 ml-2 font-semibold text-black text-lg focus:outline-none hover:from-yellow-500 hover:to-orange-400 transition">
          <FiSearch className="text-lg" />
          <span className="font-[Poppins] font-bold">Show Trends</span>
        </button>
      </div>
      <div className="flex items-center mr-10 mt-4 md:mt-0">
        <p className="text-gray-600 text-lg font-semibold mr-2">For</p>
        <input type="radio" id="localities" name="trend_type" value="localities" className="mr-1" />
        <label htmlFor="localities" className="text-[#6D1E3D] text-lg font-semibold mr-4">Localities</label>
        <input type="radio" id="projects" name="trend_type" value="projects" className="mr-1" />
        <label htmlFor="projects" className="text-[#6D1E3D] text-lg font-semibold">Projects</label>
      </div>
    </div>
  );

}
