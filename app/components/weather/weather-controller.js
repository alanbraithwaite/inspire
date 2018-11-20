import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function kelvintoFahrenheit(temp) {
	return (((temp - 273.15) * 1.8) + 32).toFixed(0)
}

function drawWeather(weather) {
	let template = ''
	template += `
		<div id="weather">
			<div><h5>${weather.name}</h5></div>
			<div><h5>${kelvintoFahrenheit(weather.main.temp)}</h5></div>
		</div>
	
	`

	document.getElementById("weather").innerHTML = template

}
export default class WeatherController {

	constructor() {
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			drawWeather(weather)
		})
	}
}
