import { useState, useEffect } from "react";
import { WeatherType, weatherIcons } from "../lib/const";
import { toast } from "react-toastify";

export default function WeatherCard(weather: any) {
	const [statusMessage, setStatusMessage] = useState(
		"Enter your city name above"
	);
	const data = weather.weather;

	useEffect(() => {
		console.log(data.response);
		if (data.response && data.response.status === 404) {
			setStatusMessage("There is no such city");
			toast.error("There is no such city");
		}
	}, [data]);

	let isValidMain = !!weather.weather.main;

	const getWeatherIcon = (main: WeatherType) => weatherIcons[main] || "🌍";

	return (
		<section className="flex flex-col gap-10 bg-white p-5 rounded-lg text-black w-full px-3 min-w-80 sm:min-w-96 sm:max-w-md">
			<div className="flex sm:flex-row flex-col justify-center items-center gap-10 sm:divide-x-2 divide-slate-950/80 p-5">
				{isValidMain ? (
					<div className="flex justify-center items-center gap-5">
						<h2 className="text-3xl">{data.name}</h2>
						<p className="text-3xl ">{`${data.main.temp.toFixed()}°C`}</p>
					</div>
				) : (
					<p className="font-bold text-xl">{statusMessage}</p>
				)}

				{isValidMain && (
					<aside className="flex pl-10 gap-3 justify-center items-center">
						<p className="text-5xl">{getWeatherIcon(data.weather[0].main)}</p>
						<p className="text-xl font-bold">{data.weather[0].main}</p>
					</aside>
				)}
			</div>

			{isValidMain && (
				<aside className="flex justify-between items-center p-5 rounded-xl bg-slate-300 px-3 sm:flex-row flex-col gap-5 sm:gap-0 divide-y-2 sm:divide-x-2 sm:divide-y-0 divide-slate-600/30">
					<div className="flex flex-col justify-center items-center p-1">
						<p className="text-xl">🌡️ Feels like:</p>
						<p className="text-lg font-bold">
							{data.main.feels_like.toFixed()}°C
						</p>
					</div>

					<div className="flex flex-col justify-center items-center px-3">
						<p className="text-xl">💧 Humidity:</p>
						<p className="text-lg font-bold">{data.main.humidity}%</p>
					</div>

					<div className="flex flex-col justify-center items-center px-3">
						<p className="text-xl">💨 Wind:</p>
						<p className="text-lg font-bold">
							{data.wind.speed.toFixed()} KM/H
						</p>
					</div>
				</aside>
			)}
		</section>
	);
}
