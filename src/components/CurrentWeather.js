import React from 'react';
import "../CurrentWeather.css"
import { MdMyLocation, MdLocationOn } from "react-icons/md";

function CurrentWeather(props) {
    console.log(props);
  return (
    <div className="current--weather">
        <div className="search--location">
            <form action="">
                <input 
                    type="search" 
                    className="color--one" placeholder="Search . . ."
                />
                <button type="submit" className="color--one">
                    <MdMyLocation className="location--icon"/>
                </button>
            </form>
        </div>
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