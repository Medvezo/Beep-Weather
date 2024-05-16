import { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [weather, setWeather] = useState("");

	return (
		<main className="space-y-10 mt-6 px-3 2xl:mt-20 min-h-screen">
			<SearchForm setWeather={setWeather} />
			<WeatherCard weather={weather} />
			<ToastContainer theme="colored" />
		</main>
	);
}

export default App;
