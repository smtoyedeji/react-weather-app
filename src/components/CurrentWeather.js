import React from 'react';
import "../CurrentWeather.css"
import { MdLocationOn } from "react-icons/md";

function CurrentWeather() {
  return (
    <div className="current--weather">
       
        <div className="current--weather--icon">
            
        </div>
        <div className="today">
            <p className="temp--data"><span>15</span> °C</p>
            <p className="weather--description">Light Showers</p>
            <p className="date">Mon, 20th June, 2022</p>
            <div className="location">
                <MdLocationOn className="location--icon2"/>
                <p>Akure</p>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather