import React, {useEffect, useState} from 'react';
import {getWeatherToHome} from "../../helpers/getWeatherToHome";
import {Link} from "react-router-dom";
import Weather from "../../pages/weather/Weather";

const DOWNLOADING = 'downloading...'

function WeatherHome() {
    const [location, setLocation] = useState(DOWNLOADING)
    const [country, setCountry] = useState(" ")
    const [temp, setTemp] = useState(" ")
    const [condition, setCondition] = useState(DOWNLOADING)
    const [icon, setIcon] = useState(" ")

    async function getWeather() {
        let result = await getWeatherToHome()
        console.log(result)
        setLocation(result.location)
        setCountry(result.country)
        setTemp(result.temp_c)
        setCondition(result.condition)
        setIcon(result.icon_url)
    }

    useEffect(function () {
        getWeather()
    }, [])

    return (
        <div className="panel panel-weather">
            <div className="condition">{condition}</div>
            <img src={icon}/>
            <div className="span temp">{temp}<span className="degree">&deg;C</span></div>
            <Link to="/weather"><div className="span text">{location}, {country}</div></Link>

        </div>
    );
}

WeatherHome.propTypes = {};

export default WeatherHome;