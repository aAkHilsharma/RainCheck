const fetchWeatherData =  require("../utils/fetchWeatherData");

const router = require('express').Router();

router.post("/get-weather", async (req, res) => {
  try {
    const cities = req.body.cities;
    const weatherData = await fetchWeatherData(cities);

    res.json({ weather: weatherData });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error,
      msg: "Internal Server Error",
    });
  }
});

module.exports = router;