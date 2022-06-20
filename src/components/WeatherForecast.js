import React from 'react'

export default function WeatherForecast(props) {
    console.log(props)
    return (
    <div className="weather--forecast">
        <h4>Today</h4>
        <div>Weather Icon</div>
        <p>Min Temp</p>
        <p>Max Temp</p>
        <p>Humidity</p>
        <p>Windspeed</p>
    </div>
  )
}

