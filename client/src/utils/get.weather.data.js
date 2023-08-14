import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

const getWeatherData = async (cities) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/get-weather`, {
      cities: cities,
    });
    return response.data.weather;
  } catch (error) {
    throw error;
  }
};

export { getWeatherData };
