import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
// import clear from '..assets/images/clear sky.jpg'   
// import clouds from '../assets/images/clouds.jpg'
// import drizzle from '../assets/images/drizzle.webp'
// import rain from '../assets/images/rain.webp'
// import snow from '../assets/images/snow.jpg'
// import thunderstorm from '../assets/images/thunderstorm.jpg'

const Weather = () => {

    const[weather, setWeather] = useState({})
    const[ isCelsius, setIsCelsius] = useState(true)

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(success)
      function success(pos) {
        const crd = pos.coords;
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
  
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=d66214aff9c915d26e8f03262d0f890f`)
  
        .then(res => setWeather(res.data))
      }
    },[])
  
    console.log(weather);

    return (
        
        <div className='container'>

            <div>
                <h1>Weather App</h1>
                <img src={` http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`} alt="" />
                <div className='tempCont'>
                    

                    <h3 className='tempMax'><i class="fa-solid fa-temperature-arrow-up"></i><b>Temp max: </b>{ isCelsius? Math.round ( weather.main?.["temp_max"] - 273.15) : Math.round ( weather.main?.["temp_max"] - 273.15 + 32 * 1.8)} {isCelsius? "C°" : "F°"}</h3>

                    <h3 className='tempMin'><i class="fa-solid fa-temperature-arrow-down"></i><b>Temp min: </b>{ isCelsius? Math.round ( weather.main?.["temp_min"] - 273.15) : Math.round ( weather.main?.["temp_min"] - 273.15 + 32 * 1.8)} {isCelsius? "C°" : "F°"}</h3>

                    <h3 className='temp'><i class="fa-solid fa-temperature-high"></i><b>Temp: </b>{ isCelsius? Math.round ( weather.main?.temp - 273.15) : Math.round ( weather.main?.temp - 273.15) * 1.8 + 32} {isCelsius? "C°" : "F°"}</h3>

                    <button onClick={() => setIsCelsius(!isCelsius)}>Change to {isCelsius? "F°" : "C°"}</button>
                </div>
            </div>
            <div className='info'>
                <div className='location'>
                    <h3><i class="fa-solid fa-earth-americas"></i><b>Country: </b>{weather.sys?.country}</h3>
                    <h3><i class="fa-solid fa-location-dot"></i> <b>Area: </b>{weather.name}</h3>
                </div>
                
                <div className='description'>
                    <h3><b>Weather <br /> Conditions: </b>{weather.weather?.[0].description}</h3>
                    {/* <h3><b>Description: </b>{weather.weather?.[0].main}</h3>*/} <br />
                    <h3><i class="fa-solid fa-wind"></i>{" "}
                    <b>Wind Speed: </b>{weather.wind?.speed} m/s</h3> 
                    <h3><i class="fa-solid fa-cloud"></i> 
                    <b>Clouds: </b>{weather.clouds?.all} %</h3>
                    <h3><i class="fa-solid fa-ruler-vertical"></i> 
                    {" "}<b>Pressure: </b>{weather.main?.pressure} hPa</h3>
                </div>
            </div>

        </div>
    );
};

export default Weather;


        
// if(<h3><b>Description: </b>{weather.weather?.[0].main}</h3> === "Thunderstorm"){
//     return <img src={thunderstorm} alt="" />
// }else if(<h3><b>Description: </b>{weather.weather?.[0].main}</h3> === "snow"){
//     return <img src={snow} alt="" />
// }else if(<h3><b>Description: </b>{weather.weather?.[0].main}</h3> === "rain"){
//     return(<img src={rain} alt="" />)
// }else if(<h3><b>Description: </b>{weather.weather?.[0].main}</h3> === "Thunderstorm"){

// }else if

