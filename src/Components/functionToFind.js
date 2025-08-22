import { countryNameToCode } from "./countryNameToCode"
// import dotenv from "WeatherApp/.env"
//dotenv.config();
const apiId = import.meta.env.VITE_apiId;

export default async function computeweather(city,country){
    if(!city || !country)return;
    const city_name=city.toLowerCase();
    const countryName=country.toLowerCase();
    let country_code;

    const x=countryNameToCode.find(({name})=>countryName.toLowerCase()===name.toLowerCase());

    if(x){
        country_code=x.code;
    }else{
        console.log('Wrong country name');
    }
    const limit=5;
    const geoCodeApi=`http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${country_code}&limit=${limit}&appid=${apiId}`
    //console.log(geoCodeApi);
    //return geoCodeApi;
    const details=await fetch(geoCodeApi);
    const data=await details.json();

    let lati=data[0].lat;
    let long=data[0].lon;

    const weatherApi=`https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&limit=${limit}&appid=${apiId}`;
    const resultAPI=await fetch(weatherApi);
    const result=await resultAPI.json();

    //return result;

    let currentWeather=result.list[0];
    //console.log(currentWeather)
    let curr_temp=currentWeather.main.temp;
    let current_humidity=currentWeather.main.humidity;
    let current_date=currentWeather.dt;
    //console.group([curr_temp-273.15,current_humidity,current_date]);


    const weatherInfo = {
    temp: curr_temp,
    humidity: current_humidity,
    date: current_date,
    city: city_name,
    country: country_code
    };

    return weatherInfo;
}
