import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        humidity: 30,
        temp: 31.9,
        tempMax: 31.9,
        tempMin: 31.9,
        weather:"scattered clouds",
        name : "Aurangabad"
        })
        let updateInfo = (newinfo)=>{
      setWeatherInfo(newinfo)
        }
    return(
        <div style={{textAlign:"center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}