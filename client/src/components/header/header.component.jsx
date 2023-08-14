import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">RainCheck</span>
        </a>
      </div>

      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">
          Local Conditions
        </h1>
        <p className="fs-5 text-body-secondary">
          Get instant updates on temperature, wind, and humidity for cities
          worldwide. Plan your day with accurate forecasts and stay prepared
          with our concise weather information.
        </p>
      </div>
    </header>
  );
}

export default Header