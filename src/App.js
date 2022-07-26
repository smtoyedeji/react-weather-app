import React, { useState } from 'react';
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
    const fetchCurrentData = fetch(`${CURRENT_WEATHER_API_URL}weather?lat=${lat}&lon=${long}&units=metric&appid=${CURRENT_WEATHER_API_KEY}`);

    const fetchForecastData = fetch(`${CURRENT_WEATHER_API_URL}forecast?lat=${lat}&lon=${long}&units=metric&appid=${CURRENT_WEATHER_API_KEY}`);

    Promise.all([fetchCurrentData, fetchForecastData])
      .then(async ([currentData, forecastData]) => {
        const currentWeather = await currentData.json();
        const forecast = await forecastData.json();
        setCurrentWeatherData({ city: searchValue.label, ...currentWeather });
        setForecastWeatherData({ city: searchValue.label, ...forecast });
      })
      .catch(err => console.error(err));
  }

  const forecastItems = (y) => {
    let items = [];
    for (let i = 0; i < y.length; i += 8) {  
      items.push(y[i]);
    }
    let elements = items.map(item => {
      return (
        <WeatherForecast
          key={item.dt}
          icon={item.weather[0].icon}
          temp_max={item.main.temp_max}
          temp_min={item.main.temp_min}
          date={item.dt_txt}
        />
      )
    })
    return elements;
  }

  return (
    <div className='app--container'>
      <Location
        onSearchChange={handleOnSearchChange}
        data={currentWeatherData}
      />
      <div className="weather--details">
        <div className="forecast">          
          {forecastWeatherData !== null && forecastItems(forecastWeatherData.list)}
        </div>
        {currentWeatherData && <h4 className="heading">Today's Highlights</h4>}
        {currentWeatherData && <CurrentWeatherDetails data={currentWeatherData} />}
      </div>

    </div>
  );
}

export default App;
