import React, {useEffect, useState} from 'react';
import {getWeatherToHome} from "../../helpers/getWeatherToHome";



function WeatherHome() {
    const [location, setLocation] = useState('downloading')

async function getHomeWeather() {
        const weather = await getWeatherToHome()
        setLocation(weather.location)
}

useEffect(() =>  getHomeWeather(), [])

    return (
        <div className="panel panel-weather">
            <div className="location">{location}</div>
            <img src="http://ultraimg.com/images/KlfpUAu.png"/>
            <div className="span temp">28<span className="degree">&deg;C</span></div>
            <div className="span text">Sunny</div>
        </div>
    );
}

WeatherHome.propTypes = {};

export default WeatherHome;