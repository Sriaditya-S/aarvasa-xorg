import React, { useState, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MAX_IMAGE_SLOTS = 6; // Total number of image boxes

const AddPhotos = ({ onPrevious, onNext }) => {
    const navigate = useNavigate();
    const [images, setImages] = useState(Array(MAX_IMAGE_SLOTS).fill(null));
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        if (files.length === 0) return;

        const newImages = [...images];
        let filesAdded = 0;

        for (let i = 0; i < newImages.length && filesAdded < files.length; i++) {
            if (newImages[i] === null) {
                newImages[i] = files[filesAdded];
                filesAdded++;
            }
        }
        setImages(newImages);
        event.target.value = null; // Clear the input so same file can be uploaded again
    };

    const handleRemoveImage = (indexToRemove) => {
        const newImages = [...images];
        newImages[indexToRemove] = null;
        setImages(newImages);
    };

    const handleAddPhotoButtonClick = () => {
        fileInputRef.current.click();
    };

    // Find the index of the first empty slot for the 'Add Photo' button
    const firstEmptySlotIndex = images.findIndex(image => image === null);

    return (
        <div className="min-h-screen bg-[#fffcf2] flex items-center justify-center p-4 font-poppins">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-xl md:max-w-4xl relative border border-gray-300">

               <button onClick={() => navigate("/listings")} className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-700">
                                   <IoClose size={24} md:size={28} />
                               </button>
               


                <div className="w-3/4 md:w-1/2 h-1.5 md:h-1.6 bg-gray-200 rounded-full mb-6 md:mb-10 mx-auto">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '75%' }}></div>
                </div>

                <h1 className="text-xl md:text-3xl font-bold text-center text-[#3D3D3D] mb-6 md:mb-10">
                    Add Photos to your Listing
                </h1>


                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10 w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
                    {images.map((image, index) => (
                        <div key={index} className="relative w-full h-28 sm:h-32 md:h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                            {image ? (
                                <>
                                    <img src={URL.createObjectURL(image)} alt={`upload-preview-${index}`} className="w-full h-full object-cover" />
                                    <button
                                        className="absolute top-1 right-1 bg-white rounded-full p-1 cursor-pointer"
                                        onClick={() => handleRemoveImage(index)}
                                    >
                                        <IoClose size={12} sm:size={14} className="text-red-500" />
                                    </button>
                                </>
                            ) : (
                                index === firstEmptySlotIndex && (
                                    <div
                                        className="w-full h-full flex items-center justify-center cursor-pointer"
                                        onClick={handleAddPhotoButtonClick}
                                    >
                                        <FaPlus size={24} sm:size={30} className="text-gray-500" />
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleImageUpload}
                                            multiple
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                </div>


                <div className="flex flex-col sm:flex-row justify-center px-4 gap-3 sm:gap-4">
                    <button
                        className="w-full sm:w-auto px-6 py-2 bg-white border border-gray-300 rounded-lg text-base font-semibold text-[#5A5A59] hover:bg-gray-100 transition-colors duration-200"
                        onClick={onPrevious}
                    >
                        Previous
                    </button>
                    <button
                        className="w-full sm:w-auto px-6 py-2 bg-[#6D1E3D] text-white rounded-lg text-base font-semibold hover:bg-[#5a1832] transition-colors duration-200"
                        onClick={onNext}
                    >
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AddPhotos; 