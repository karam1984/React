import React from 'react';

const Infoweather = ({ city }) => {
	const kelvinToCelcius = (kelvin) => {
		return (kelvin - 273).toFixed(2);
	};
	return (
		<div className="main">
			<h3>
				{city.name} {city.sys.country}
			</h3>
			<div className="weatherMain">
				<h5>{city.weather[0].main}</h5>
				<p> {city.weather[0].description} </p>
			</div>
			<p> min temp: {kelvinToCelcius(city.main.temp_min)} °C </p>
			<p> max temp: {kelvinToCelcius(city.main.temp_max)} °C </p>
			<p>
				location: {city.coord.lat} {city.coord.lon}
			</p>
		</div>
	);
};

export default Infoweather;