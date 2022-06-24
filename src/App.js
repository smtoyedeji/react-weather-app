import React, {useState} from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import CurrentWeatherDetails from './components/CurrentWeatherDetails';
import Location from './components/Location';
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
      if(e.target.value.length > 4) {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=5&appid=${api.key}`)
        .then(res => res.json())
        .then(data => {
        console.log(data);
      })
    }   
  }
  // const searchInput = useRef(null);

  // if (document.activeElement === searchInput.current) {
  //   console.log("focus");
  // }

  const [focused, setFocused] = React.useState(false)
  const onFocus = () => setFocused(true, console.log("focus"))
  const onBlur = () => setFocused(false, console.log("blur"))

  return (
    <div className='app--container'>
       <div className="search--location">
            <form>
                <input 
                    type="text" 
                    className="color--one" placeholder="Search . . ."
                    onKeyDown={search}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                <button type="submit" className="color--one">
                    <MdMyLocation className="location--icon"/>
                </button>
            </form>
        </div>
      {!focused && <CurrentWeather 
        searchInput="searchInput"
      />}
      {focused && <Location />}
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
