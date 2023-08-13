"use client";
import React, { useState } from "react";
import GoogleMapsComponent from "@/components/map";
import Sidebar from "@/components/sidebar";
import {
	ActiveLocationContextProvider,
	ActiveLocationContext,
} from "@/components/active-location-context";
import Modal from "@/components/modal/modal"; // Correctly import the Modal component

export default function Home() {
	const locations = [
		{
			id: 1,
			lat: 44.115243,
			lng: 19.290845,
			title: "Ratna bolnica",
			content: `Ratna bolnica je bila jedna od najznačajnijih tačaka u životu Srebreničana, pogotovo u periodu do proglašenja Srebrenice kao "Zaštićene zone UN-a"`,
		},

		{
			id: 2,
			lat: 44.1171821,
			lng: 19.2895582,
			title: "Vezionica",
			content: `U Vezionici je bila Bravo četa Holandskog bataljona`,
		},

		{
			id: 3,
			lat: 44.1487059,
			lng: 19.2846734,
			title: "Fabrika akumulatora",
			content: `U Fabrici akumulatora je bila smještena komanda Dutchbata`,
		},
	];

	const [activeLocation, setActiveLocation] = useState(null);

	return (
		<main className="flex w-screen h-screen overflow-hidden">
			<ActiveLocationContextProvider>
				<Sidebar locations={locations} />
				<GoogleMapsComponent
					className="w-100 h-screen"
					height="100vh"
					locations={locations}
				/>
				
			</ActiveLocationContextProvider>
		</main>
	);
}
