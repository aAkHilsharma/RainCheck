import axios from "axios";

const getWeatherData = async (cities) => {
  try {
    const response = await axios.post(`/api/get-weather`, {
      cities: cities,
    });
    return response.data.weather;
  } catch (error) {
    throw error;
  }
};

export { getWeatherData };
