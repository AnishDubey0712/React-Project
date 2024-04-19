import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import API_KEY from './API_KEY';
export default function SearchBox(){
    
    let [city ,setCity]= useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_Key = API_KEY;
    let getWeatherInfo = async()=>{
     let response =    await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse =  await response.json()
    console.log(jsonResponse);
    let result = {
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
        name: jsonResponse.name,
    }
    console.log(result)
    }
    let handleChange = (event)=>{
        setCity(event.target.value)
    }
    let handleSubmit = (event)=>{
        event.preventDefault();//preventDefault is used to prevent default functioning of event like page reload
        setCity("");
        getWeatherInfo();
    }
    return(
        <div className='SearchBox'>
        <h3>Search</h3>
        <form action="" onSubmit={handleSubmit}>
        <TextField id="city" label="Add City" variant="outlined" value={city} onChange={handleChange} required/> 
        <br /><br />
        <Button variant="contained" type='Submit'>Search</Button>
        </form>
        </div>
    )
}