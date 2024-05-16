import axios from "axios";
import React from "react";

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

function getLocalStorage(city: string) {
	// checking if there is already weather data in localStorage
	const cachedData = localStorage.getItem(city);

	if (cachedData) {
		const cachedWeather = JSON.parse(cachedData);
		const currentTime = new Date().getTime();

		// check if cached data is less than 60 minutes old
		if (currentTime - cachedWeather.timestamp < 3600000) {
			console.log("Returned cache data");
			return cachedWeather.data;
		}
	}
}

function setLocalStorage(data: any, city: string) {
	// save to local storage with a time
	localStorage.setItem(
		city,
		JSON.stringify({
			data: data,
			timestamp: new Date().getTime(),
		})
	);
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
