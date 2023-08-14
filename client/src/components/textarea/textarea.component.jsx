import React, { useState } from "react";
import { Button } from "antd";
import { getWeatherData } from "../../utils/get.weather.data";
import { toast } from "react-hot-toast";

const Textarea = ({ setWeather }) => {
  const [cities, setCities] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setCities(value);
    setError(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (cities.trim() === "") {
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);
    const data = cities.split(/[,\s]+/);

    try {
      const weather = await getWeatherData(data);
      setWeather(weather);
      toast.success('Weather data fetched successfully!')
    } catch (error) {
      toast.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="form-floating">
        <textarea
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
          value={cities}
          required
          onChange={handleChange}
        ></textarea>
        <label htmlFor="floatingTextarea2">Enter Cities</label>
        {error && (
          <div className="invalid-feedback">Please fill in the cities.</div>
        )}
      </div>
      <div className="mt-4">
        <Button
            onClick={handleClick}
            style={{
              display: "flex",
              alignItems: "center",
              background: "blue",
              color: "white",
              paddingTop: "1.2rem",
              paddingBottom: "1.2rem",
              justifyContent: "center",
              fontWeight: "500",
              fontSize: "1.1rem"
            }}
            type="primary"
            block
            loading={loading}
        >
            Get Weather
        </Button>
      </div>
    </div>
  );
};

export default Textarea;
