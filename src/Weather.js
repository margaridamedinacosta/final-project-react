import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="search a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>{" "}
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.ate}</li>
          <li>
            {" "}
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize"> {weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div clasName="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">ºC</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "14b0c56139feeed41482ca86bba4198c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
