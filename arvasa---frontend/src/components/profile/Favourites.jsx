import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Property from '../listing/Property';

const Favourites = () => {
  const [favouriteProps, setFavouriteProps] = useState([]);
  const [favourites, setFavourites] = useState([]); // stores liked IDs
  const [loading, setLoading] = useState(true);

  const fetchFavouriteProperties = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      // Step 1: Get list of favourite property IDs
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/listings/getfavourite`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const favouriteIds = data.property_ids;
      setFavourites(favouriteIds); // save current liked IDs

      // Step 2: Get full property details by IDs
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/listings/by-ids`, {
        ids: favouriteIds,
      });

      setFavouriteProps(res.data);
    } catch (err) {
      console.error("Error fetching favourite properties:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLiking = async (propertyId) => {
    try {
      const token = localStorage.getItem("accessToken");

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/listings/favourite`,
        { propertyId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

        fetchFavouriteProperties(); // re-fetch to show updated property
    } catch (err) {
      console.error("Liking failed:", err);
    }
  };

  useEffect(() => {
    fetchFavouriteProperties();
  }, []);

  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md max-w-full sm:max-w-screen-xl mx-auto my-4 sm:my-8">
      <div className="flex items-center text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">
        <span className="text-yellow-500 mr-1 sm:mr-2">⭐</span>
        Your Favourites <span className="ml-1 sm:ml-2 text-gray-400 text-xs sm:text-sm">›</span>
      </div>

      <div className="grid w-full gap-4 sm:gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : favouriteProps.length === 0 ? (
          <p className='text-lg font-semibold'>You have currently no favourites .</p>
        ) : (
          favouriteProps.map((currElem) => (
            <Property
              key={currElem._id}
              listing={currElem}
              favourites={favourites}
              handleLiking={handleLiking}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;
