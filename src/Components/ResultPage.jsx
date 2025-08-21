
import React from 'react'

const ResultPage = () => {
  return (
    <div>
        <h1>Weather Result</h1>
      <p>City: </p>
      <p>Country: </p>
      <p>Temperature: </p>
      <p>Humidity: </p>
      <p>Date: </p>
    </div>
  )
}

export default ResultPage
// function Result() {
//   const weatherData = JSON.parse(localStorage.getItem("weatherData")) || {};

//   return (
//     <div>
//       <h1>Weather Result</h1>
//       <p>City: {weatherData.city}</p>
//       <p>Country: {weatherData.country}</p>
//       <p>Temperature: {weatherData.temp - 273.15} °C</p>
//       <p>Humidity: {weatherData.humidity}%</p>
//       <p>Date: {new Date(weatherData.date * 1000).toLocaleString()}</p>
//     </div>
//   );
// }

// export default Result;
