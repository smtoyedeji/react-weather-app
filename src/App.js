import './App.css';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    <div className='app--container'>
      <CurrentWeather /> 
      <WeatherForecast 
        day="day"
        icon="weather-icon"
        minTemp="minTemp"
        maxTemp="maxTemp"
        humidity="humidity"
        windSpeed="windspeed"
      />     
    </div>
  );
}

export default App;
