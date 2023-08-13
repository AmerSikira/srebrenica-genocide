"use client";

import React, { useContext } from "react";
import {
	GoogleMap,
	Marker,
	LoadScript,
	InfoWindow,
} from "@react-google-maps/api";
import { ActiveLocationContext } from "./active-location-context";
import Link from "next/link";

const GoogleMapsComponent = ({ height, locations }) => {
	const { activeLocation, setActiveLocation } = useContext(
		ActiveLocationContext
	);

	const handleMarkerClick = (marker) => {
		setActiveLocation(marker);
	};

	const handleInfoWindowClose = () => {
		setActiveLocation(null);
	};
	const containerStyle = {
		width: "100%",
		height,
	};

	const center = {
		lat: 44.103316, // Replace with your default latitude
		lng: 19.298364, // Replace with your default longitude
	};

	return (
		<LoadScript googleMapsApiKey={process.env.MAPS_API}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
			>
				{locations.map((location, index) => (
					<Marker
						key={index}
						position={location}
						onClick={() => handleMarkerClick(location.id)}
					>
						{activeLocation === location.id && (
							<InfoWindow onCloseClick={handleInfoWindowClose}>
								<div>
									<h2 className="text-black text-lg font-bold">
										{location.title}
									</h2>

									<p className="text-black">
										{location.content}
									</p>
									<p className="text-blue-900 hover:text-red-700 mt-2">
										<Link href={`/lokacija/${location.id}`}>
											Pogledajte više
										</Link>
									</p>
								</div>
							</InfoWindow>
						)}
					</Marker>
				))}
			</GoogleMap>
		</LoadScript>
	);
};

export default GoogleMapsComponent;
