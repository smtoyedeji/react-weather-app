import React from 'react'
import "../css/currentWeatherDetails.css"
import { MdNearMe } from "react-icons/md";
import ProgressBar from 'react-bootstrap/ProgressBar';

function CurrentWeatherDetails(props) {

  //update wind direction icon from props.data
  let rotate = props.data === null ? `${-45}deg` : `${-45 + props.data.wind.deg}deg`;
  const style = {
    transform: `rotate(${rotate})`,
  }
  //winddirection degree
  let windDegree
  let value = props.data.wind.deg
  if (value >= 11.25 && value <= 33.75) {
    windDegree = "NNE"
  } else if (value >= 33.75 && value <= 56.25) {
    windDegree = "NE"
  } else if (value >= 56.25 && value <= 78.75) {
    windDegree = "ENE"
  } else if (value >= 78.75 && value <= 101.25) {
    windDegree = "E"
  } else if (value >= 101.25 && value <= 123.75) {
    windDegree = "ESE"
  } else if (value >= 123.75 && value <= 146.25) {
    windDegree = "SE"
  } else if (value >= 146.25 && value <= 168.75) {
    windDegree = "SSE"
  } else if (value >= 168.75 && value <= 191.25) {
    windDegree = "S"
  } else if (value >= 191.25 && value <= 213.75) {
    windDegree = "SSW"
  } else if (value >= 213.75 && value <= 236.25) {
    windDegree = "SW"
  } else if (value >= 236.25 && value <= 258.75) {
    windDegree = "WSW"
  } else if (value >= 258.75 && value <= 281.25) {
    windDegree = "W"
  } else if (value >= 281.25 && value <= 303.75) {
    windDegree = "WNW"
  } else if (value >= 303.75 && value <= 326.25) {
    windDegree = "NW"
  } else if (value >= 326.25 && value <= 348.75) {
    windDegree = "NNW"
  } else {
    windDegree = "N"
  }


  return (
    <div className="current-weather-details">
      <div className="card--one">
        <div className="card">
          <h4>Wind status</h4>
          <p>{props.data && <span>{props.data.wind.speed}</span>}mps</p>
          <div className="icon-box">
            <MdNearMe style={style} className="icon" />
            <p>{props.data && windDegree}</p>
          </div>
        </div>
        <div className="card">
          <h4>Humidity</h4>
          <p>{props.data && <span>{props.data.main.humidity}</span>}%</p>
          <div className="icon-box">
            <ProgressBar now={props.data && props.data.main.humidity} variant="success" />
          </div>
        </div>
      </div>
      <div className="card--two">
        <div className="card">
          <h4>Visibility</h4>
          <p>{props.data && <span>{props.data.visibility}</span>}m</p>
        </div>
        <div className="card">
          <h4>Air Pressure</h4>
          <p>{props.data && <span>{props.data.main.pressure}</span>}hPa</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeatherDetails