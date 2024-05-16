import { useState } from "react";
import { getWeather } from "../utils/api";
import React from "react";
import AutoComplete from "./AutoComplete";

export default function SearchForm({
	setWeather,
}: {
	setWeather: React.Dispatch<React.SetStateAction<any>>;
}) {
	const [search, setSearch] = useState<string>("");

	const [suggestions, setSuggestions] = useState([]);

	const handleSearch = async (e: any) => {
		let value = e.target.value;
		setSearch(value);

		
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault(); // Preventing refresh

		const weatherData = await getWeather(search);
		setWeather(weatherData);
	};

	return (
		<form className="flex flex-col p-5 shadow-lg rounded-lg bg-gradient-to-b from-white  to-teal-500   max-w-md mx-auto mt-10">
			<label
				htmlFor="weather"
				className="text-lg text-slate-950 font-semibold mb-2">
				Enter a city name:
			</label>
			<div>
				<input
					type="text"
					id="weather"
					name="weather"
					value={search}
					onChange={handleSearch}
					className="p-2 border border-slate-300 rounded focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-200 ease-in-out mb-4"
					placeholder="Prague"
				/>
				<AutoComplete suggestions={suggestions}/>
			</div>
			<button
				type="submit"
				onClick={handleSubmit}
				className="bg-teal-700 text-white rounded p-2 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-900 focus:ring-opacity-50 transition-all duration-150 ease-in-out">
				Search
			</button>
		</form>
	);
}
