import { useState } from "react";
import { getWeather } from "../utils/api";
import React from "react";

export default function SearchForm({
	setWeather,
}: {
	setWeather: React.Dispatch<React.SetStateAction<any>>;
}) {
	const [search, setSearch] = useState<string>("");

	const handleSearch = (e: any) => {
		setSearch(e.target.value);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault(); // preventing refresh

		const weatherData = await getWeather(search);
		setWeather(weatherData);
	};

	return (
		<form className="flex flex-col">
			<label htmlFor="weather">Enter city name:</label>
			<input
				type="text"
				id="weather"
				name="weather"
				value={search}
				onChange={handleSearch}
			/>
			<button type="submit" onClick={handleSubmit}>
				Search
			</button>

		</form>
	);
}
