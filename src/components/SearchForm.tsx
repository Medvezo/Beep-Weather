import { useState } from "react";
import { getWeather } from "../utils/api";

export default function SearchForm() {
	const [search, setSearch] = useState<string>("");

	const handleSearch = (e: any) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e:any) => {
		e.preventDefault()
		getWeather(search);
	}

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
			<button type="submit" onClick={handleSubmit}>Search</button>
		</form>
	);
}
