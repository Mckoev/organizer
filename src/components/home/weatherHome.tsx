import React, {useEffect} from 'react';
import {getWeatherToHome} from "../../helpers/getWeatherToHome";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../reduxToolkit/hooks";

function WeatherHome() {
    const location = useAppSelector(state => state.toolkit.location)
    const country = useAppSelector(state => state.toolkit.country)
    const temp = useAppSelector(state => state.toolkit.temp)
    const condition = useAppSelector(state => state.toolkit.condition)
    const icon = useAppSelector(state => state.toolkit.icon)

    console.log(location)

    const stateWeather = useAppSelector(state => state.toolkit)
    const dispatch = useAppDispatch()

    function handler() {
        console.log(stateWeather)
    }

    useEffect(function () {
        getWeatherToHome(location)
    }, [])

    return (
        <div className="panel panel-weather">
            <div className="condition">{condition}</div>
            <img src={icon}/>
            <div className="span temp">{temp}<span className="degree">&deg;C</span></div>
            <Link to="/weather"><div className="span text">{location}, {country}</div></Link>
            <button onClick={() => handler()}>BTN</button>
        </div>
    );
}

WeatherHome.propTypes = {};

export default WeatherHome;