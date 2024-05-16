import axios from "axios";
import React from "react";
import { getLocalStorage, setLocalStorage } from "./localStorage";

export async function getWeather(city: string) {
	getLocalStorage(city);

	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
				import.meta.env.VITE_API_KEY
			}`
		);

		const data = response.data;
		if (!data) throw new Error("Response has empty body");

		setLocalStorage(data, city);

		return data;
	} catch (error) {
		console.error(error);
		return error;
	}
}

export async function getSuggestions(
	value: string,
	setState: React.Dispatch<React.SetStateAction<any>>
) {
	if (value.length > 2) {
		// Only fetch if input length > 2
		try {
			const response = await axios.get(
				`https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${value}&max=5`,
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_AMADEUS_KEY}`,
					},
				}
			);
			console.log(response.data)
			setState(response.data.data);
		} catch (error) {
			console.error("Error fetching cities:", error);
			setState([]);
		}
	} else {
		setState([]);
	}
}
