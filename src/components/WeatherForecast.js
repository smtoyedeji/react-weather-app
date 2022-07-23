import React from 'react';
import "../css/weatherForecast.css"

export default function WeatherForecast(props) {
  console.log(props);
  return (
    <div className="weather--forecast">
      <div className="weather--card">
        <h4>Today</h4>
        <div className="weather--icon">
        <img src={process.env.PUBLIC_URL + `/icons/${props.icon}.png`} alt="weather icon" />
        </div>
        <div className="temp">
          <p>{Math.round(props.temp_max)}°C</p>
          <p className="min">{Math.round(props.temp_min)}°C</p>
        </div>
      </div>
    </div>
  )
}

