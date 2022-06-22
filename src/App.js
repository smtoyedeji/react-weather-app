import './App.css';
import CurrentWeather from './components/CurrentWeather';
import CurrentWeatherDetails from './components/CurrentWeatherDetails';
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    <div className='app--container'>
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
