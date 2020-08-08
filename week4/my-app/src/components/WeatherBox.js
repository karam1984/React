import React from "react";
import { Link } from "react-router-dom";

function WeatherBox({searchWeather, deleteCity }) {

    const {
      id,
      name,
      sys: { country },
      weather,
      main: { temp_min, temp_max },
      coord: { lon, lat },
    } = searchWeather;

    const { main, description } = weather[0]

    return (
      <div className="box">
        <Link to={`/${id}`}>
          <p className="forecast">5 day forecast</p>
        </Link>

        <div className="selected">
          <h1> {name}, {country} </h1>
          <button className="deleteBtn" onClick={() => deleteCity(id)}> X </button>
        </div>

        <div className="main">
            <h2> {main} </h2>
            <p> {description} </p>
        </div>

        <div className="temp">
            <p> min temp: {temp_min} </p>
            <p> max temp: {temp_max} </p>
            <p> location: {lon}, {lat} </p>
        </div>
      </div>
    );


  }

export default WeatherBox;