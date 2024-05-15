import axios from "axios";

export async function getWeather(city: string) {
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
				import.meta.env.VITE_API_KEY
			}`
		);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}
