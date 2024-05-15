import { useEffect } from "react";

export default function WeatherCard(weather: any) {
	useEffect(() => {
		console.log(weather);
	}, [weather]);

	const isValidMain = !!weather.weather.main;
	const data = weather.weather;

	return (
		<section className="flex flex-col gap-10 bg-white p-5 rounded-lg text-black min-w-96">
			<div className="flex gap-10 divide-x-2 divide-slate-950/80 p-5">
				<div className="flex  justify-center items-center gap-5">
					<h2 className="text-3xl">{data.name}</h2>
					<p className="text-3xl ">
						{isValidMain && data.main.temp.toFixed()}°C
					</p>
				</div>

				<aside className="flex flex-col pl-10">
					<div className="flex  gap-3 justify-center items-center">
						<p>Icon</p>
						<p className="text-xl font-bold">
							{data.weather && data.weather[0].main}
						</p>
					</div>
					<p className="text-sm">
						{data.weather && data.weather[0].description}
					</p>
				</aside>
			</div>

			<aside className="flex justify-between items-center p-5 rounded-xl bg-slate-300 ">
				<div className="flex flex-col justify-center items-center">
					<p className="text-xl ">Feels like:</p>
					<p className="text-lg font-bold">
						{isValidMain && data.main.feels_like.toFixed()}°C
					</p>
				</div>

				<div className="flex flex-col justify-center items-center">
					<p className="text-xl ">Humidity:</p>
					<p className="text-lg font-bold">
						{isValidMain && data.main.humidity}%
					</p>
				</div>

				<div className="flex flex-col justify-center items-center">
					<p className="text-xl ">Wind:</p>
					<p className="text-lg font-bold">
						{data.wind && data.wind.speed.toFixed()} KM/H{" "}
					</p>
				</div>
			</aside>
		</section>
	);
}
