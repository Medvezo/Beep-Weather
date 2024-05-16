
export function getLocalStorage(city: string) {
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

export function setLocalStorage(data: any, city: string) {
	// save to local storage with a time
	localStorage.setItem(
		city,
		JSON.stringify({
			data: data,
			timestamp: new Date().getTime(),
		})
	);
}
