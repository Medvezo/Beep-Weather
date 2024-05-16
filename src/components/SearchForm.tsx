import { useCallback, useState } from "react";
import { fetchSuggestions, getWeather } from "../utils/api";
import React from "react";
import AutoComplete from "./AutoComplete";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchForm({
	setWeather,
}: {
	setWeather: React.Dispatch<React.SetStateAction<any>>;
}) {
	const [search, setSearch] = useState<string>("");
	const [suggestions, setSuggestions] = useState([]);

	const handleSearch = async (e: any) => {
		const value = e.target.value;
		setSearch(value);
		debouncedFetchSuggestions(value);
	};

	const debouncedFetchSuggestions = useCallback(
		(value: string) => fetchSuggestions(value, setSuggestions),
		[]
	);

	const handleSubmit = async (e: any) => {
		e.preventDefault(); // Preventing refresh

		const weatherData = await getWeather(search);
		setWeather(weatherData);
	};

	const handleSelect = (city: any) => {
		setSearch(city.city);
		setSuggestions([]);
	};

	return (
		<form
			className="flex flex-col gap-5 p-5 shadow-lg rounded-lg bg-gradient-to-b from-white from-60%  to-teal-500   max-w-md mx-auto mt-10"
			onSubmit={handleSubmit}
		>
			<label
				htmlFor="weather"
				className="text-lg sm:text-2xl lg:text-xl text-slate-950 font-semibold "
			>
				Enter a city name:
			</label>
			<div className="flex justify-center items-center gap-1 ">
				<div className="relative w-[300px] mx-auto">
					<input
						type="text"
						id="weather"
						name="weather"
						value={search}
						onChange={handleSearch}
						className="p-2 border w-full  border-slate-300 rounded focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-200 ease-in-out"
						placeholder="Prague"
					/>
					<AutoComplete suggestions={suggestions} onSelect={handleSelect} />
				</div>
				<button
					type="submit"
					className="bg-teal-700 text-white rounded p-2 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-900 focus:ring-opacity-50 transition-all duration-150 ease-in-out"
				>
					<FaMagnifyingGlass className="w-6 h-6" />
				</button>
			</div>
		</form>
	);
}
