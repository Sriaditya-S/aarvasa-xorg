import React, { useState, useEffect } from "react";
import { Download, CalendarCheck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import Property from "../listing/Property";

const StatusCard = ({ title, statusText, icon }) => (
  <div className="w-full max-w-[546px] flex flex-col sm:flex-row rounded-xl overflow-hidden shadow-sm">
    <div className="bg-[#8C2841] text-white font-semibold flex items-center justify-start px-5 py-4 sm:w-1/2 w-full">
      {title}
    </div>
    <div className="bg-gradient-to-r from-[#FADC64] to-[#F5BA22] bg-opacity-70 flex items-center justify-between px-5 py-4 sm:w-1/2 w-full">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm font-medium">{statusText}</span>
      </div>
    </div>
  </div>
);

const ApplicationStatus = () => {
  const [activeTab, setActiveTab] = useState("recent");
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecentlyViewed = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      // Step 1: get recent ids
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/listings/recent`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const ids = res.data.data.map(item => item._id || item); // safety check if item is only id or populated object

      if (ids.length > 0) {
        const detailsRes = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/listings/by-ids`, {
          ids,
        });

        setRecentlyViewed(detailsRes.data);
      } else {
        setRecentlyViewed([]);
      }
    } catch (err) {
      console.error("❌ Error fetching recently viewed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLiking = async (propertyId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/listings/favourite`, { propertyId }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Refresh favourites
      fetchRecentlyViewed();
    } catch (err) {
      console.error("Liking failed:", err);
    }
  };

  useEffect(() => {
    fetchRecentlyViewed();
  }, []);

  return (
    <section>
      <div className="mt-8 mx-auto font-[poppins] bg-white rounded-3xl shadow-lg p-4 md:p-10 lg:p-20 flex flex-col items-center gap-6">

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <button
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "recent"
              ? "bg-[#F8C6D7] text-[#8C2841]"
              : "border border-gray-300 text-gray-700"
              }`}
            onClick={() => setActiveTab("recent")}
          >
            Recently viewed
          </button>
          <button
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "application"
              ? "bg-[#F8C6D7] text-[#8C2841]"
              : "border border-gray-300 text-gray-700"
              }`}
            onClick={() => setActiveTab("application")}
          >
            Application status
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "application" ? (
          <>
            <div className="flex flex-col items-center gap-4 w-full px-2 sm:px-6">
              <StatusCard title="Home loan" statusText="Approved" icon={<CheckCircle className="text-green-600 w-4 h-4" />} />
              <StatusCard title="Rental agreement" statusText="Download" icon={<Download className="text-black w-4 h-4" />} />
              <StatusCard title="Property visit scheduling" statusText="Available" icon={<CalendarCheck className="text-green-600 w-4 h-4" />} />
            </div>
            <p className="text-xs text-gray-500 text-right w-full">
              *This status bar is to indicate loan approval, in process or not.
            </p>
          </>
        ) : (
          <div className="w-full space-y-4">
            <h2 className="text-xl font-semibold">Recently Viewed Properties</h2>
            {loading ? (
              <p>Loading...</p>
            ) : recentlyViewed.length === 0 ? (
              <p className="text-gray-500">No recently viewed properties.</p>
            ) : (
              recentlyViewed.map((listing) => (
                <Property
                  key={listing._id}
                  listing={listing}
                  favourites={favourites}
                  handleLiking={handleLiking}
                />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ApplicationStatus;
