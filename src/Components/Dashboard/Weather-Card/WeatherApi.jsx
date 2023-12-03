import React, { useEffect, useState } from "react";
import style from "./Weather.module.css";
import { LuWind } from "react-icons/lu";
import { WiThermometer, WiHumidity } from "react-icons/wi";

function WeatherApi() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "281a5cfad724466f9a395004232511";
    const baseUrl =
      "https://api.weatherapi.com/v1/current.json?key=281a5cfad724466f9a395004232511&q=india";

    const city = "Madhya Pradesh";
    const url = `${baseUrl}/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.weather}>
      <div className={style.weathercondition}>
        <img src={weatherData.current.condition.icon} alt="icon" />
        <h5>{weatherData.current.condition.text}</h5>
      </div>
      <hr />
      <div className={style.weathercondition}>
        <h2>{weatherData.current.temp_c}°C</h2>
        <div className={style.temperature}>
          <WiThermometer className={style.weathericon} />
          <div className={style.temperaturetext}>
            <p>{weatherData.current.pressure_mb} mbar</p>
            <p>pressure</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={style.weathercondition}>
        <div className={style.wind}>
          <LuWind className={style.weathericon} />
          <div className={style.temperaturetext}>
            <p>{weatherData.current.wind_kph} km/h</p>
            <p>wind</p>
          </div>
        </div>
        <div className={style.humidity}>
          <WiHumidity className={style.weathericon} />
          <div className={style.temperaturetext}>
            <p>{weatherData.current.humidity}%</p>
            <p>humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApi;
