import React, { useState } from 'react';
import "./Weather.css";
import SearchBox from "../SearchBox/SearchBox";
import Info from "../Info/Info";

const Weather = () => {

    //Initial weather info
    let [weatherInfo,setWeatherInfo] = useState({
        city: "Haldwani",
        feelslike: 34.49,
        humidity: 19,
        temp: 36.38,
        tempMax: 36.38,
        tempMin: 36.38,
        weather: "clear sky",
        timezone: "06/09/2024, 11:31:07 PM",
        speed: 12.96,
    });

    //Update weather info 
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

  return (
    <div className='Weather'>
        <h3>Weather Application</h3>
        <SearchBox updateInfo={updateInfo}/>
        <Info info={weatherInfo}/>
    </div>
  )
}

export default Weather