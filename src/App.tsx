import { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";

function App() {
	const [weather, setWeather] = useState("");

	return (
		<main className="flex flex-col">
			<SearchForm setWeather={setWeather} />
			<WeatherCard weather={weather} />
		</main>
	);
}

export default App;
