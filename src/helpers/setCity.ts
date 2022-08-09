import {FormEvent} from "react";
import {CITY} from "../api/weather/weatherApiData";
import {getWeatherForManyDays} from "../api/weather/getWeatherForManyDays";
import {getWeatherForOneDay} from "../api/weather/getWeatherForOneDay";

export function setCity(e: FormEvent<HTMLFormElement>, city: string): void {
    e.preventDefault()
    localStorage.setItem(CITY, city)
    getWeatherForManyDays()
    getWeatherForOneDay()
}