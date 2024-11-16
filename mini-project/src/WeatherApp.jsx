import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo ,setWeatherInfo]= useState({
        city:"jeur",
            FeelsLike : 24.48,
            temp:25.05,
            tempMin:27.9,
            tempMax:30.04,
            humidity : 27,
            weather:"haze",
    });

    let updateInfo = (result) =>{
        setWeatherInfo(result);

    }
    return(
        <div style={{textAlign :"center"}}>
            <h2>Weather App by Snehal</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    ); 
}