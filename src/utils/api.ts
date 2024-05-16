import axios from "axios";

export async function getWeather(city: string) {
	// checking if there is already weather data in localStorage
	const cachedData = localStorage.getItem(city);
	if (cachedData) {
		const cachedWeather = JSON.parse(cachedData);
		const currentTime = new Date().getTime();
		// check if cached data is less than 60 minutes old
		if (currentTime - cachedWeather.timestamp < 3600000) {
			console.log("Returned cache data")
			return cachedWeather.data;
		}
	}

	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
				import.meta.env.VITE_API_KEY
			}`
		);

		const data = response.data;
		if (!data) throw new Error("Response has empty body");

		// save to local storage with a time
		localStorage.setItem(
			city,
			JSON.stringify({
				data: data,
				timestamp: new Date().getTime(),
			})
		);

		return data;
	} catch (error) {
		console.error(error);
		return error;
	}
}
