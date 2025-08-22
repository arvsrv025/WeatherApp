
import React from 'react'

const ResultPage = ({ countryName,city, country, temp, humidity, date }) => (
  <div className="flex justify-center flex-col bg-blue-300 p-[4rem]">
    <h1 className='text-4xl bold text-center'>Weather Result</h1>
    <p className='text-xl p-[1rem] '>City: {city}</p>
    <p className='text-xl p-[1rem] '>Country: {countryName}</p>
    <p className='text-xl p-[1rem] '>Temperature: {temp - 273.15} °C</p>
    <p className='text-xl p-[1rem] '>Humidity: {humidity}%</p>
    <p className='text-xl p-[1rem] '>Date: {new Date(date * 1000).toLocaleString()}</p>
  </div>
);
export default ResultPage
