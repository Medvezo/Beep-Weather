import axios from "axios";
import { getLocalStorage, setLocalStorage } from "./localStorage";
import { debounce } from "lodash";

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

export const fetchSuggestions = debounce(async (value, setSuggestions) => {
    if (value.length > 2) {
        // Only fetch if input length > 2
        const options = {
            method: "GET",
            url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${value}`,
            headers: {
                "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
                "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
            },
        };

        try {
            const response = await axios.request(options);
            setSuggestions(response.data.data);
        } catch (error) {
            console.error("Error fetching cities:", error);
            setSuggestions([]);
        }
    } else {
        setSuggestions([]);
    }
}, 500); // 500ms debounce delay