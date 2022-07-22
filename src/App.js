import React, {useState, useEffect} from 'react';
import './App.css';
import Location from './components/Location';
import CurrentWeatherDetails from './components/CurrentWeatherDetails';
import WeatherForecast from './components/WeatherForecast';
import { CURRENT_WEATHER_API_URL, CURRENT_WEATHER_API_KEY } from './components/apicalls';


function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);

  const handleOnSearchChange = (searchValue) => {
    const [lat, long] = searchValue.value.split(" ");


    const fetchCurrentData = fetch(`${CURRENT_WEATHER_API_URL}weather?lat=${lat}&lon=${long}&units=imperial&appid=${CURRENT_WEATHER_API_KEY}`);
    
    const fetchForecastData = fetch(`${CURRENT_WEATHER_API_URL}forecast?lat=${lat}&lon=${long}&units=imperial&appid=${CURRENT_WEATHER_API_KEY}`);

    Promise.all([fetchCurrentData, fetchForecastData])
      .then(async ([currentData, forecastData]) => {
        const currentWeather = await currentData.json();
        const forecast = await forecastData.json();
        setCurrentWeatherData({city: searchValue.label, ...currentWeather});
        setForecastWeatherData({city: searchValue.label, ...forecast});
      })
      .catch(err => console.error(err));

    
  }



  return (
    <div className='app--container'>
      <Location 
        onSearchChange={handleOnSearchChange}
        data={currentWeatherData}
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
        <CurrentWeatherDetails data={currentWeatherData}/>
      </div> 
           
    </div>
  );
}

export default App;
