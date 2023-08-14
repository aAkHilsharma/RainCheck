const axios = require("axios");

async function fetchWeatherData(cities) {
  const apiKey = process.env.API_KEY;
  const units = "metric";
  const weatherApiBaseUrl = process.env.WEATHER_API_BASE_URL;

  const weatherData = {};

  await Promise.all(
    cities.map(async (city) => {
      try {
        const response = await axios.get(weatherApiBaseUrl, {
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
