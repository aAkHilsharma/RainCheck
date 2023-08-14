const API_KEY = "baf16e1fda0b6a4403246c31f176ddc1";
const axios = require("axios");

async function fetchWeatherData(cities) {
  const apiKey = API_KEY;
  const units = "metric";
  const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

  const weatherData = {};

  await Promise.all(
    cities.map(async (city) => {
      try {
        const response = await axios.get(baseUrl, {
          params: { q: city, units, appid: apiKey },
        });

        if (response.status === 200) {
          weatherData[city] = response.data;
        }
      } catch (error) {
        console.error(`Error fetching weather for ${city}:`, error);
        weatherData[city] = "N/A";
      }
    })
  );
  return weatherData;
}

module.exports = fetchWeatherData;
