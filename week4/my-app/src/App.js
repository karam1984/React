import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import WeatherBox from './components/WeatherBox';
import Form from './components/Form';
import WeatherForcast from "./components/WeatherForcast";

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiKey = '6a76947a2a926745c0643b32fd27b030';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const cityWeather = async () => {
    try {
      if (city !== '') {
        setLoading(true);
        const res = await fetch(apiUrl );

        if (res.status === 200) {
          const data = await res.json();
          const newData = [data, ...weather]
          setWeather(newData);
        } else {
          throw Error('there is an error');
        }
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    cityWeather();
    e.preventDefault();
  };

  const deleteCity = (id) => {
    setWeather((cities) => {
      cities = cities.filter((city) => city.id !== id);
      return cities;
    });
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <h1> Weather </h1>
            <Form city={city} setCity={setCity} onSubmit={onSubmit} />
            {isLoading && <p> Loading... </p>}
            {error && <p> there is an error</p>}
            { weather.length !==0 &&
            weather.map((city) => (
              <div key={city.id}>
                <WeatherBox searchWeather={city}  deleteCity={deleteCity} />
              </div> 
            ))}
          </div>
      </Route>
        <Route path="/:cityId">
          <WeatherForcast/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;