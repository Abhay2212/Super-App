import React from 'react'
import DateTime from "./DateTime";
import style from "./Weather.module.css";
import WeatherApi from './WeatherApi';

function Weather() {

  return (
    <div className={style.weathercontainer}>
        <DateTime/>
        <WeatherApi/>
    </div>
  );
}

export default Weather;
