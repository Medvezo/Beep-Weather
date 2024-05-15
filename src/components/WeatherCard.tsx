import { useEffect } from "react";

export default function WeatherCard(weather: any) {
	useEffect(() => {
		console.log(weather);
	}, [weather]);

	const isValidMain = !!weather.weather.main;
	const data = weather.weather;

	return (
		<section className=" bg-white p-5 rounded-lg text-black">
			<h2>{data.name}</h2>
			<p>{isValidMain && data.main.temp.toFixed()}F</p>
			<p>{data.weather && data.weather[0].main}</p>

			<section className="flex bg-slate-300 gap-5">
				<p>{isValidMain && data.main.feels_like.toFixed()}</p>
				<p>{isValidMain && data.main.humidity}%</p>
				<p>{data.wind && data.wind.speed.toFixed()} MPH </p>
			</section>
		</section>
	);
}
