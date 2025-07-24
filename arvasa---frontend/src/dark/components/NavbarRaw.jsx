import { Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
const NavbarRaw = ({color}) => {
    return (
        <nav className="bg-transparent fixed w-full z-20 top-0 start-0 z-[9999]  backdrop-blur-md px-2 py-4">
            <div className="md:mx-8 flex items-center justify-between mx-auto">
                {/* mx-2 */}
                <div className="logo">
                    <a href="#" className="flex items-center">
                        <img src="/images/logo_shape.png" className="w-24 md:w-28" alt="" />
                        <img src="/images/image.png" alt="" className="w-24 md:w-28" />
                    </a>
                </div>
                <div>
                    <ul className="hidden items-center gap-8 md:flex lg:gap-16">
                        <li className="relative group">
                            <Link to={'/'}>
                                <p className={`text-sm lg:text-lg text-${color}-800 font-[500] group-hover:text-gray-500`}>Home</p>

                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 rounded-full bg-[#6C1E3C] bottom-[-5px] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>
                        <li className="relative group">
                            <Link to={'/about'}>
                                <p className={`text-sm lg:text-lg text-${color}-800 font-[500] group-hover:text-gray-500`}>About Us</p>

                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 rounded-full bg-[#6C1E3C] bottom-[-5px] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>
                        <li className="relative group">
                            <Link to={'/agent'}>
                                <p href="#"className={`text-sm lg:text-lg text-${color}-800 font-[500] group-hover:text-gray-500`}>Agent</p>

                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 rounded-full bg-[#6C1E3C] bottom-[-5px] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>
                        <li className="relative group">
                            <Link to={'/services'}>
                                <p className={`text-sm lg:text-lg text-${color}-800 font-[500] group-hover:text-gray-500`}>Services</p>

                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 text-white rounded-full bg-[#6C1E3C] bottom-[-5px] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>
                        <li className="relative group">
                            <Link to={'/listings'}>
                                <p className={`text-sm lg:text-lg text-${color}-800 font-[500] group-hover:text-gray-500`}>Listings</p>

                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 rounded-full bg-[#6C1E3C] bottom-[-5px] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>
                    </ul>
                </div>
                <div className="profile flex items-center gap-4 ">
                    <Link to={'/profile'}>
                    <img src="/images/profile.png" className="w-10 rounded-full h-10" alt="" />
                    </Link>
                    <button className="hidden md:flex font-semibold items-center text-[#8C2841] gap-4 md:py-2 px-4 p-1 lg:p-2 lg:px-6 text-sm rounded-full hover:scale-105 transition-transform" style={{
                        background: "linear-gradient(to right, #F7A240, #F5C01A)",
                    }}>
                        <Phone size={18} color="#8C2841" />
                        Contact us

                    </button>
                    <button className="md:hidden text-white p-2 rounded-lg" style={{
                        background: "linear-gradient(to right, #F7A240, #F5C01A)",
                    }}>
                        <Menu size={24} />
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default NavbarRaw;
