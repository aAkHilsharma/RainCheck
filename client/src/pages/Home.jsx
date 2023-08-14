import React, { useState } from 'react'
import Textarea from '../components/textarea/textarea.component';
import Header from '../components/header/header.component'; 
import WeatherCard from '../components/weather/weather.card';

const Home = () => {
    const [weather, setWeather] = useState({});
    return (
        <div className="container py-3">
        <Header />
        <Textarea setWeather={setWeather} />
        {Object.entries(weather).length > 0 ? (
            <div className="row row-cols-1 row-cols-md-3 mb-3 mt-3">
            {Object.entries(weather).map(([city, weatherData], i) => {
                if (weatherData !== "N/A") {
                return <WeatherCard key={i} weather={weatherData} city={city} />;
                }
                return null;
            })}
            </div>
        ) : (
            <div className="mt-3">Enter the name of cities seperated by space</div>
        )}
        </div>
    );
}

export default Home