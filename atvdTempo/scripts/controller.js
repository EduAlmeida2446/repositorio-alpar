class WeatherController {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.weather = null;
    }

    async getWeatherByCity(cityName) {
        try {
            const weatherData = await this.weatherService.getWeatherByCity(cityName);
            this.weather = new Weather(
                cityName,
                weatherData.main.temp,
                weatherData.weather[0].description,
                weatherData.main.humidity
            );
            this.updateView();
        } catch (error) {
            console.error('Error getting weather data:', error);
        }
    }

    updateView() {
        const weatherInfoElement = document.getElementById('weather-info');
        if (this.weather) {
            weatherInfoElement.innerHTML = `
            <h2>${this.weather.city}</h2>
            <p>Temperature: <strong id="temp">${this.weather.temperature}</strong> °C</p>
            <p>Description: <strong>${this.weather.description}</strong></p>
                <p>Humidity: <strong>${this.weather.humidity}</strong>%</p>
            `;
        } else {
            weatherInfoElement.innerHTML = '<p>No weather data available</p>';
        }
    }
}
