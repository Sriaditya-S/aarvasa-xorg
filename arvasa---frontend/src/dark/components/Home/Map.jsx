import React, { useEffect, useRef, useState } from "react";
import { Heading } from "../Utils/Heading";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({ onLocationSelect }) => {
    const mapRef = useRef(null);
    const inputRef = useRef(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyBNRjAvYOBa3hgrvJh82nYhmSYd4v-JRSc",
            version: "weekly",
            libraries: ["places"],
        });

        loader.load().then(() => {
            if (mapRef.current && inputRef.current) {
                const map = new window.google.maps.Map(mapRef.current, {
                    center: { lat: 12.972442, lng: 77.580643 },
                    zoom: 13,
                });

                const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);

                autocomplete.addListener("place_changed", () => {
                    const place = autocomplete.getPlace();
                    setLocation(place);

                    if (!place.geometry || !place.geometry.location) return;

                    const loc = place.geometry.location;
                    map.setCenter(loc);

                    new window.google.maps.Marker({
                        map,
                        position: loc,
                    });

                    // ✅ Send selected location to parent
                    onLocationSelect({
                        address: place.formatted_address,
                        lat: loc.lat(),
                        lng: loc.lng()
                    });
                });
            }
        });
    }, []);

    return (
        <div className="mx-2 mt-8 mb-8 md:mx-4 relative">
            <Heading label="Geographic Reach" />
            <div className="flex flex-col items-center justify-center w-full gap-[30px]">
                <div className="input w-full p-2 flex flex-wrap md:flex-nowrap justify-center gap-1">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search a location"
                        className="border w-full border-gray-200 outline-none rounded-lg"
                        style={{ padding: "10px", marginBottom: "10px" }}
                    />
                    <button className="font-semibold w-full md:w-[20%] text-[#8C2841] mb-[10px] p-[10px] text-sm rounded-lg"
                        style={{ background: "linear-gradient(to right, #F7A240, #F5C01A)" }}>
                        Search
                    </button>
                </div>
                <div ref={mapRef} style={{ height: "500px", width: "100%", padding: 30 }}></div>
            </div>
        </div>
    );
};

export default Map;
