const API_KEY='8e007b2a5ede4b332dded4f54567735d';
const base_url='https://api.openweathermap.org/data/2.5/';

//https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=8e007b2a5ede4b332dded4f54567735d

export const  getWeatherData= (infoType,searchParams)=>{
    const url=new URL(base_url+ infoType);
    url.search=new URLSearchParams({...searchParams,appid:API_KEY});
    // console.log(url);
    return fetch(url)
        .then((res)=>res.json())
        .then((data)=>data);
}

export const getCurrentWeatherData=(data)=>{
    const logitude=data.coord.lon;
    const latitude=data.coord.lat;
    const timezone=data.timezone;
    // console.log(latitude);
    // console.log(logitude);

    return {logitude,latitude,timezone};

}
export const getCurrentDateTime=(timezone)=>{
    const now=new Date();
    
   
    const offset = timezone * 1000;
    console.log(now);
    console.log('abs');
    const localDateTime = new Date(now+offset);

     return localDateTime.toString();

}
