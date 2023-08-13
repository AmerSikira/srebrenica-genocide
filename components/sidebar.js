"use client";
import { useState, useContext } from "react";
import { ActiveLocationContext } from "./active-location-context";

export default function Sidebar({ locations }) {
	const { activeLocation, setActiveLocation } = useContext(
		ActiveLocationContext
	);
	const dates = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	];

	const months = [
		"Januar",
		"Februar",
		"Mart",
		"April",
		"Maj",
		"Juni",
		"Juli",
		"August",
		"Septembar",
		"Oktobar",
		"Novembar",
		"Decembar",
	];

	const years = [1992, 1993, 1994, 1995];

	return (
		<aside className="flex flex-col w-1/3 h-screen bg-black px-2 py-4">
			<div className="flex border border-width-1 rounded-lg p-1 bg-slate-200 border-slate-100 w-100">
				<input
					className="border-0 bg-slate-200 w-3/4"
					placeholder="npr. Vezionica"
				/>
				<button className="bg-black rounded-lg w-1/4 text-white py-2 text-center">
					Pretraga
				</button>
			</div>

			<div className="grid-cols-3 grid mt-2 gap-2">
				<select className="border border-slate-100 rounded-lg bg-slate-200 py-2 text-black">
					<option value="0">Odaberite datum</option>
					{dates.map((singleDate) => {
						return (
							<option key={singleDate} value={singleDate}>
								{singleDate}
							</option>
						);
					})}
				</select>

				<select className="border border-slate-100 rounded-lg bg-slate-200 py-2 text-black">
					<option value="0">Odaberite mjesec</option>
					{months.map((singleMonth, index) => {
						let monthIndex = index + 1;
						monthIndex =
							monthIndex < 10 ? `0${monthIndex}` : monthIndex;
						return (
							<option key={singleMonth} value={monthIndex}>
								{singleMonth}
							</option>
						);
					})}
				</select>

				<select className="border border-slate-100 rounded-lg bg-slate-200 py-2 text-black">
					<option value="0">Odaberite godinu</option>
					{years.map((singleYear) => {
						return (
							<option key={singleYear} value={singleYear}>
								{singleYear}
							</option>
						);
					})}
				</select>
			</div>

			<div className="flex flex-col gap-2 mt-2">
				{locations.map((location) => {
					let classes =
						location.id === activeLocation ? "bg-gray-800" : "";
					return (
						<div
							className={`border border-width-1 border-slate-100 rounded-lg py-3 px-2 hover:bg-gray-800 hover:cursor-pointer ${classes}`}
							key={location.id}
							onClick={() => setActiveLocation(location.id)}
						>
							<h1 className="text-white">{location.title}</h1>
						</div>
					);
				})}
			</div>
		</aside>
	);
}
