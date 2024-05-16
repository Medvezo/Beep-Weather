import { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [weather, setWeather] = useState("");

	return (
		<main className="flex flex-col justify-start items-center gap-10 sm:gap-16 mt-6 2xl:mt-20 min-h-screen">
			<SearchForm setWeather={setWeather} />
			<WeatherCard weather={weather} />
			<ToastContainer theme="colored"/>
		</main>
	);
}

export default App;
