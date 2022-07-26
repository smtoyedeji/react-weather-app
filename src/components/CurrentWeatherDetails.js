import React from 'react'
import "../css/currentWeatherDetails.css"
import { MdNearMe } from "react-icons/md";
import {ProgressBar} from 'react-bootstrap';

function CurrentWeatherDetails(props) {
  //update wind direction icon from props.data
  let rotate = props.data === null ? `${-45}deg` : `${-45 + props.data.wind.deg}deg`;
  const style = {
    transform: `rotate(${rotate})`,
  }
  //winddirection degree
  const windDirection = (x) => {
    if (x < 22.5) {
      return "N";
    } else if (x < 67.5) {
      return "NE";
    } else if (x < 112.5) {
      return "E";
    } else if (x < 157.5) {
      return "SE";
    } else if (x < 202.5) {
      return "S";
    } else if (x < 247.5) {
      return "SW";
    } else if (x < 292.5) {
      return "W";
    } else if (x < 337.5) {
      return "NW";
    } else {
      return "N";
    }
  }

  return (
    <div className="current-weather-details">
      <div className="card--one">
        <div className="card">
          <h4>Wind status</h4>
          <p><span>{props.data.wind.speed}</span>mps</p>
          <div className="icon-box">
            <MdNearMe style={style} className="icon" />
            <p>{windDirection(props.data.wind.deg)}</p>
          </div>
        </div>
        <div className="card">
          <h4>Humidity</h4>
          <p><span>{props.data.main.humidity}</span>%</p>
          <div className="progress-bar">
            <ProgressBar variant="pinfo" now={props.data.main.humidity} />
          </div>
        </div>
      </div>
      <div className="card--two">
        <div className="card">
          <h4>Visibility</h4>
          <p><span>{props.data.visibility}</span>m</p>
        </div>
        <div className="card">
          <h4>Air Pressure</h4>
          <p><span>{props.data.main.pressure}</span>hPa</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeatherDetails