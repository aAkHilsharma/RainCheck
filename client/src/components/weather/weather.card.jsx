const WeatherCard = ({ weather, city }) => {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-bold">{city}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title display-3">
            {weather.main.temp} &deg;C
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>Feels Like: {weather.main.feels_like}</li>
            <li>Wind Speed: {weather.wind.speed}</li>
            <li>Humidity: {weather.main.humidity}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
