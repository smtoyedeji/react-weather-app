import React from 'react';
import "../css/location.css"
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEODB_API_URL, geoDBAPIoptions } from './apicalls';
import { MdLocationOn, MdMyLocation } from "react-icons/md";

function Location(props) {
  // let image = `icons/${props.data.weather[0].icon}.png`
  // console.log(image);

  //create date object to get current date
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let dayOfWeek = date.getDay();
  //get day of week by name
  let dayOfWeekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let currentDay = dayOfWeekName[dayOfWeek];
  let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let currentMonth = monthName[month - 1];

  date = `${currentDay}, ${day} ${currentMonth}`;


  



  const [location, setLocation] = React.useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEODB_API_URL}?minPopulation=500000&namePrefix=${inputValue}`, geoDBAPIoptions)
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map(city => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.country}`,
            location: `${city.name}, ${city.countryCode}`,
          })),
        }
      })
      .catch(err => console.error(err));
  }

  const handleOnChange = (value) => {
    console.log(value);
    setLocation(value);
    props.onSearchChange(value);
  }

  return (
    <div className="current--weather">
      <div className="search">
        <AsyncPaginate
          placeholder="Search for a city..."
          debounceTimeout={500}
          value={location}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          className="asyncpaginate"
        />
        <button type="submit" className="color--one">
          <MdMyLocation className="location--icon"/>
        </button>
      </div>
      
      {/* <form>
        <input 
          type="text" 
          className="color--one" placeholder="Search . . ."
        />
        
      </form> */}
      

      {props.data !== null && <div className="current--weather--icon">
        <img src={process.env.PUBLIC_URL + `/icons/${props.data.weather[0].icon}.png`} alt="weather icon" />
      </div>}
      <div className="today">
        {props.data !== null && <p className="temp--data">
          <span>{Math.round(props.data.main.temp)}</span> °C
        </p>}
        {props.data !== null && <p className="weather--description">{props.data.weather[0].description}</p>}
        {props.data !== null && <p className="date">{date}</p>}
        {location && <div className="location">
          <MdLocationOn className="location--icon2" />
          <p>{location.location}</p>
        </div>}
      </div>
    </div>
  );
}

export default Location