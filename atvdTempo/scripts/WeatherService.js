class WeatherService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }

    async getWeatherByCity(cityName) {
        try {
            const response = await fetch(`${this.baseUrl}?q=${cityName}&appid=${this.apiKey}&units=metric`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    }
}