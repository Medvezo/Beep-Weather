export const weatherIcons: Record<WeatherType, string> = {
	Clear: "☀️",
	Clouds: "☁️",
	Rain: "🌧️",
	Snow: "❄️",
	Drizzle: "🌦️",
	Thunderstorm: "⛈️",
	Mist: "🌫️",
	Smoke: "💨",
	Haze: "🌫️",
	Dust: "🌪️",
	Fog: "🌫️",
	Sand: "🏜️",
	Ash: "🌋",
	Squall: "🌬️",
	Tornado: "🌪️",
};

export type WeatherType =
	| "Clear"
	| "Clouds"
	| "Rain"
	| "Snow"
	| "Drizzle"
	| "Thunderstorm"
	| "Mist"
	| "Smoke"
	| "Haze"
	| "Dust"
	| "Fog"
	| "Sand"
	| "Ash"
	| "Squall"
	| "Tornado";
