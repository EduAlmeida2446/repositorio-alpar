const apiKey = '307a495d19863242c0a82bdf0150370f';
const weatherService = new WeatherService(apiKey);
const weatherController = new WeatherController(weatherService);
weatherController.getWeatherByCity("São Paulo");

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    weatherController.getWeatherByCity(cityInput);
}