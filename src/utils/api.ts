import axios from "axios";

export async function getWeather(city: string) {
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
				import.meta.env.VITE_API_KEY
			}`
		);

		const data = response.data;
		if (!data) throw new Error("Response has empty body");

		return data;

	} catch (error) {
		console.error(error);
		return error
	}
}
