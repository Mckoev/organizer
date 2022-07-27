import React, {useEffect} from 'react';
import {useAppSelector} from "../../reduxToolkit/hooks";
import {getWeatherToWeather} from "../../helpers/getWeatherToWeather";
import {getWeatherToHome} from "../../helpers/getWeatherToHome";

function Location() {
    const location = useAppSelector(state => state.toolkit.location)
    const country = useAppSelector(state => state.toolkit.country)
    console.log(location)


    function handler(e: any): void {
        e.preventDefault()
        console.log(e.target[0].value)
        getWeatherToWeather(e.target[0].value)
    }

    useEffect(function () {
        getWeatherToWeather(location)
    }, [])


    return (
        <div className="panel panel-location">
            <div className="text-field text-field_floating-2">
                <form onSubmit={(e)=> handler(e)}>
                    <input className="text-field__input" type="name" id="name" name="city"/>
                    <label className="text-field__label" htmlFor="name">{location}, {country}</label>
                </form>
            </div>
        </div>
    );
}

Location.propTypes = {};

export default Location;