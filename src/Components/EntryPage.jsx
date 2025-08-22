import React, { useState } from "react";
import computeweather from "./functionToFind";
import ResultPage from "./ResultPage";

const EntryPage = () => {
  const [city,setCity]=useState("");
  const [country,setCountry]=useState("");
  const [flag,setFlag]=useState(false);
  const [result,setResult]=useState(null);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (!city || !country) {
      alert("Please enter both city and country");
      return;
    }
    const weatherData=await computeweather(city,country);
    if(weatherData){
      setResult(weatherData);
      setFlag(true);
      console.log("Result is",weatherData);
    }
  };
  

  return (
    <>
    { !flag ?
    (<div className="flex justify-center bg-blue-300 p-[4rem]">
    
      <form onSubmit={handleSubmit}>
        <p className="text-4xl">Enter the Location</p>
        <div className="flex flex-col pt-[25px]">
          <label className="flex flex-col">
            Enter the name of the city
            <input
              className="bg-white rounded-[5px] pl-[5px]"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City Name"
              type="text"
            ></input>
          </label>
        </div>
        <div className="flex flex-col pt-[15px]">
          <label className="flex flex-col">
            Enter the name of the country
            <input
              className="bg-white rounded-[5px] pl-[5px]"
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country Name"
              value={country}
              type="text"
            ></input>
          </label>
        </div>

        <div className="flex flex-col items-center pt-[15px]">
          <button 
          type="submit"
          className="bg-white tetx-black h-[1.5rem] w-[6.5rem] rounded-2xl hover:bg-blue-900 hover:text-white">
            SUBMIT
          </button>
        </div>
      </form>
      </div>)
      : 
      (<ResultPage countryName={country} {...result}/>)
    }
    </>
    
  );
};

export default EntryPage;
// hover:h-[1.8rem] hover:w-[6.8rem]
