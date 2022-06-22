import './App.css';
import CurrentWeather from './components/CurrentWeather';
import CurrentWeatherDetails from './components/CurrentWeatherDetails';
import WeatherForecast from './components/WeatherForecast';
import { MdMyLocation } from "react-icons/md";

function App() {
  return (
    <div className='app--container'>
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
