// components/listing/Property.jsx
import React from 'react';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaBed, FaBath, FaRuler } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";


const Property = ({ listing, favourites, handleLiking }) => {
    const {
        _id,
        propertyTitle,
        priceD,
        imageUrls,
        bedrooms,
        bathrooms,
        coordinates,
        carpetArea,
        location,
        city,
        shortDescription
    } = listing;




    return (
        <div className="w-full h-auto bg-white rounded-xl shadow-md flex flex-col gap-6 lg:gap-2 lg:flex-row p-4">
            <div className="relative w-full lg:w-[500px] h-[250px] lg:h-[269px] rounded-lg overflow-hidden mb-4 lg:mb-0">
                <Link to={`/listings/propertydetails/${_id}`}>
                    <img
                        src={imageUrls?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
                        alt={propertyTitle}
                        className="h-full p-1 w-full border border-gray-300 rounded-lg object-contain"
                    />
                </Link>
                <button
                    onClick={() => handleLiking(_id)} 
                    className="absolute top-4 right-4 p-2 bg-white/30 rounded-full"
                >
                    {favourites.includes(_id?.toString()) ? (
                        <FaHeart className="text-red-500" />
                    ) : (
                        <FaRegHeart className="text-black/30" />
                    )}
                </button>
                <button className="absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6 bg-[#FAF9F6] rounded-full flex items-center justify-center">
                    <FaChevronLeft className="text-black" />
                </button>
                <button className="absolute top-1/2 right-2 -translate-y-1/2 w-6 h-6 bg-[#FAF9F6] rounded-full flex items-center justify-center">
                    <FaChevronRight className="text-black" />
                </button>
                <a target='_blank' rel="noopener noreferrer" href={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`}>
                    <button className="absolute bottom-1 left-[10px] px-4 py-2 bg-black/50 rounded text-white flex items-center gap-2">
                        <FaMapMarkerAlt />
                        View on Map
                    </button>
                </a>
            </div>

            <div className="flex-1 px-4 lg:px-8">
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                    <button className="px-3 bg-[#F5D5E2] border border-[#6D1E3D]/50 rounded-xl text-[#6D1E3D]">
                        Overview
                    </button>
                    <button className="px-3 py-2 border border-[#949494] rounded-xl text-[#5A5A59]">Details</button>
                    <button className="px-3 py-2 border border-[#949494] rounded-xl text-[#5A5A59]">Facilities</button>
                </div>

                <h2 className="text-lg font-semibold text-[#3D3D3D] mb-2">{propertyTitle}</h2>
                <p className="text-md font-semibold text-[#3D3D3D] mb-2">₹ {priceD}</p>

                <div className="flex flex-wrap gap-4 mb-2">
                    <div className="flex items-center gap-2"><FaBed /><span>{bedrooms}</span></div>
                    <div className="flex items-center gap-2"><FaBath /><span>{bathrooms}</span></div>
                    <div className="flex items-center gap-2"><FaRuler /><span>{carpetArea} sq.ft</span></div>
                </div>

                <p className="text-[#656565] mb-1">{shortDescription}</p>
                <p className="text-[#656565]">{location}, {city}</p>
            </div>

            <div className="w-full lg:w-[300px] space-y-3 lg:space-y-5 text-base border-t-2 lg:border-t-0 lg:border-l-2 border-[#000000] mt-4 lg:mt-0 pt-4 lg:pt-0 lg:pl-4">
                <button className="w-full py-2.5 bg-white rounded-xl text-[#5A5A59]">Connect Owners</button>
                <button className="w-full p-2 py-2.5 bg-white border rounded-xl flex items-center gap-2 text-sm">
                    <MdEmail /> Get Mail Id
                </button>
                <button className="w-full p-2 py-2.5 bg-white border rounded-xl flex items-center gap-2 text-sm">
                    <MdPhone /> Get Phone no
                </button>
                <button className="w-full p-2 py-2.5 bg-white border rounded-xl flex items-center gap-2 text-sm">
                    <FaWhatsapp className="text-[#00A000]" /> Get Whatsapp no
                </button>
            </div>
        </div>
    );
};

export default Property;
