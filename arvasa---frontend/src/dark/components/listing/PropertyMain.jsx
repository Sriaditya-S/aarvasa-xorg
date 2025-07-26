// pages/Listing.jsx
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ListingFilterBar from '../../components/listing/ListingFilterBar';
import Property from '../../components/listing/Property';
import Pagination from '../../components/Utils/Pagination';
import Loaders from '../Loaders';
import { FilterContext } from '../../context/FilterProvider';
import AuthContext from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const PropertyMain = () => {
    const navigate = useNavigate();
    const { filters } = useContext(FilterContext);
    const { user, fetchUser } = useContext(AuthContext);

    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favourites, setFavourites] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [maxItems, setMaxItems] = useState(20); // Backend paginates 20 per page
    const [totalPages, setTotalPages] = useState(0);

    // 🔁 Fetch Listings
    const fetchListings = async (page = 1, limit = maxItems) => {
        setLoading(true);
        try {
            const query = new URLSearchParams({
                ...filters,
                page,
                limit,
            }).toString();

            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/listings?${query}`);
            setListings(res.data.listings);
            setTotalPages(res.data.totalPages);
            setCurrPage(res.data.currentPage);
        } catch (err) {
            console.error('Error fetching listings FROM MAIN:', err);
        } finally {
            setLoading(false);
        }
    };

    // 🔁 Fetch Favourites
    const fetchFavourites = async () => {
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                return;

            }
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/listings/getfavourite`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setFavourites(res.data.property_ids);
        } catch (err) {
            console.error("Error fetching favourites:", err);
        }
    };

    // 🔁 Call on mount & on filter change
    useEffect(() => {
        fetchListings(currPage, maxItems);
    }, [filters, currPage]);

    useEffect(() => {
        fetchFavourites();
    }, []);

    // ❤️ Toggle Like
    const handleLiking = async (prop_id) => {
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                return navigate("/signin");
            }
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/listings/favourite`,
                { propertyId: prop_id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.data.success) {
                setFavourites((prev) =>
                    prev.includes(prop_id)
                        ? prev.filter((id) => id !== prop_id)
                        : [...prev, prop_id]
                );
            }
        } catch (err) {
            if (err.response.status === 401) {
                navigate("/signin");
            }
            console.error("Liking failed:", err);
        }
    };

    return (
        <div className="bg-orange-50 pb-6">
            <ListingFilterBar />

            <div className="w-[98%] min-h-[300px] mx-auto mt-4 mb-8">
                {loading ? (
                    <Loaders />
                ) : listings.length === 0 ? (
                    <p className="text-center">No listings found.</p>
                ) : (
                    <div className="card flex flex-col gap-8">
                        {listings.map((listing) => (
                            <Property
                                key={listing._id}
                                listing={listing}
                                favourites={favourites}
                                handleLiking={handleLiking}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* ✅ Pagination */}
            {!loading && totalPages > 1 && (
                <Pagination
                    currentPage={currPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrPage(page)}
                />
            )}
        </div>
    );
};

export default PropertyMain;
