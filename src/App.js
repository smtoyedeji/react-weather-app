import React, {useState} from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import CurrentWeatherDetails from './components/CurrentWeatherDetails';
import WeatherForecast from './components/WeatherForecast';
import { MdMyLocation } from "react-icons/md";


const api = {
  key: "b1d4a0483a5f8cc01330a55b41b09917",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [location, setLocation] = useState("");

  function search(e) {
    console.log(e.target.value);
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=5&appid=${api.key}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  return (
    <div className='app--container'>
       <div className="search--location">
            <form>
                <input 
                    type="text" 
                    className="color--one" placeholder="Search . . ."
                    onKeyDown={search}
                />
                <button type="submit" className="color--one">
                    <MdMyLocation className="location--icon"/>
                </button>
            </form>
        </div>
      <CurrentWeather 
        searchInput="searchInput"
      />
      <div className="weather--details">
        <WeatherForecast 
          day="day"
          icon="weather-icon"
          minTemp="minTemp"
          maxTemp="maxTemp"
          humidity="humidity"
          windSpeed="windspeed"
        />
        <CurrentWeatherDetails />
      </div>
           
    </div>
  );
}

export default App;
