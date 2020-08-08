import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function WeatherForcast() {
  const [city, setCity] = useState({});
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {cityId} = useParams();

 let apiKey  ="75bdb64885e97438bbc0f7599ac3e9b5";
  useEffect(() => {
      const getData = async () => {
          try {
              const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${apiKey} `;
              setLoading(true);

              const res = await fetch(apiUrl);
              if (res.status === 200) {
                  const data = await res.json();
                  setData(data.list);
                  setCity(data.city);
              } else {
                  throw Error('Something went wrong...');
              }

              } catch (e) {
                setError(true);
              } finally {
                setLoading(false);
              }
      };
      getData();
  },[apiKey, cityId]);

  return ( 
      <div>
          <h1> Five Days Weather Forcast </h1>
          {city && (<h2>{city.name}, {city.country}</h2>)}
          {error && <p> there is an error </p>}
          {isLoading && <p> Loading... </p>}

          <ResponsiveContainer width="80%" height={500}>
          {data &&(
              <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dt_txt" />
                  <YAxis dataKey="main.temp" />
                  <Tooltip />
                  <Area type="monotone" dataKey="main.temp" name="temp" stroke="#B4A4FD" fill="#B4A4FD" />
              </AreaChart>
              )}
          </ResponsiveContainer>

          <button style={{ fontSize: '16px', marginLeft: '50px', marginTop:'20px' }}>
              <Link to="/">Back</Link>
          </button>
       </div>
  );
}

export default WeatherForcast; 