import { useEffect, useRef } from "react";
import { Heading } from "../Utils/Heading";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

export function Geographic() {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (mapContainerRef.current && !mapInstanceRef.current) {
            mapInstanceRef.current = leaflet
                .map(mapContainerRef.current, {
                    center: [28.6139, 77.2088],
                    zoom: 13,
                });

            leaflet
                .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                })
                .addTo(mapInstanceRef.current);

            mapInstanceRef.current.invalidateSize();
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div className="md:mx-8">
            <Heading label="Geographic Reach" />
            <div id="map" ref={mapContainerRef} className="w-full h-[480px] mx-auto border border-gray-300 rounded-3xl shadow-lg"></div>
        </div>
    );
}