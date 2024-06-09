import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';
import { colors } from '@mui/material';


const SearchBox = ({updateInfo}) => {
    let[city,setCity] = useState("");
    let [error,setError] = useState(false);

    //API_URL
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c80ad12db1181034a04cd4a7e55fb02c";

    // Function to convert time zone offset to IST
    function convertToIST(timezoneOffsetInSeconds) {
    const currentTimeUTC = new Date();
    const timezoneOffsetInMilliseconds = timezoneOffsetInSeconds * 1000;
    const targetTime = new Date(currentTimeUTC.getTime() + timezoneOffsetInMilliseconds);
    const istOffset = 19800 * 1000;
    const istTime = new Date(targetTime.getTime() + istOffset);
    const options = { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const istTimeString = new Intl.DateTimeFormat('en-US', options).format(istTime);
    return istTimeString;
    }
  
    //Weather information get through api call 
    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                timezone: convertToIST(jsonResponse.timezone),
                speed: jsonResponse.wind.speed * 3.6,

            }
            console.log(result);
            return result;
        }catch(err) {
            throw err;
        }
    }
    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err) {
            setError(true);
        }
        
    }


  return (
    <div className='SearchBox'>
        <form action="" onSubmit={handleSubmit} className='Box'>
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
        <br /><br />
        <Button variant="contained" type='submit' endIcon={<SendIcon />}>
         Search
        </Button>

        </form>
        {error && <p className='err'>No such place exist!</p>}
    </div>
  )
}

export default SearchBox