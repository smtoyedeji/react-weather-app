import React from 'react'
import "../css/currentWeatherDetails.css"
import { MdNearMe } from "react-icons/md";

function CurrentWeatherDetails(props) {
  console.log(props.data);

  //update wind direction icon from props.data
  let rotate = props.data === null ? `${-45}deg` : `${-45 + props.data.wind.deg}deg`;
  const style = {
    transform: `rotate(${rotate})`,
  }
  return (
    <div className="current-weather-details">
      <div className="card--one">
        <div className="card">
        <h4>Wind status</h4>
          <p>{props.data && <span>{props.data.wind.speed}</span>}mps</p>
          <div className="icon-box">
            <MdNearMe style={style} className="icon"/>
            <p>WSW</p>
          </div>
        </div>
        <div className="card">
        <h4>Humidity</h4>
          <p>{props.data && <span>{props.data.main.humidity}</span>}%</p>
          <div className="icon-box">
            <MdNearMe className="icon"/>
            <p>WSW</p>
          </div>
        </div>
      </div>
      <div className="card--two">
        <div className="card">
          <h4>Visibility</h4>
          <p>{props.data && <span>{props.data.visibility}</span>}</p>
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