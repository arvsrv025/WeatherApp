// import { useState } from 'react'

import './App.css';
import React from 'react';
import TopButtons from './Components/TopButtons';
import Input from './Components/Input';
import TimeandLocation from './Components/TimeandLocation';
import TemperatureAndDeatils from './Components/TemperatureAndDeatils';
import {getWeatherData,getCurrentWeatherData,getCurrentDateTime} from './Services.js/WeatherService';

function App() {
    
  const fetchWeather = async () => {
    const weatherData = await getWeatherData('weather', { q: 'London', units: 'metric' });

    if (weatherData) {
        const { longitude, latitude,timezone} = getCurrentWeatherData(weatherData);
        console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);
        try {
          
          const currentDateTime = getCurrentDateTime(timezone);
          console.log(`Current Date and Time in ${timezone}: ${currentDateTime}`);
         } catch (error) {
          console.error(error);
      }
    }
};
React.useEffect(() => {
  fetchWeather();
}, []);
      
  return (
    <>
      <div className='mx-auto max-w-screen mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
        <TopButtons/>
        <Input/>
        <TimeandLocation/>
        <TemperatureAndDeatils/>
      </div>
    </>
  )
}

export default App
