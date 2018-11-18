import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(weather) {
	let template = ''
	template += `<div>${weather.name}</div>

							 <div>${weather.main.temp}</div>
					
	
	`

	document.getElementById("weather").innerHTML = template

}
export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			drawWeather(weather)
			//What can you do with this weather object?
		})
	}
}
