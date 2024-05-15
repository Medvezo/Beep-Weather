import { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";

function App() {
	const [weather, setWeather] = useState("");

	return (
		<main className="flex flex-col gap-52 mt-20 min-h-screen">
			<SearchForm setWeather={setWeather} />
			<WeatherCard weather={weather} />
		</main>
	);
}

export default App;
