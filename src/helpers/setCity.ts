import { FormEvent } from 'react';
import { CITY } from 'api/weather/weatherApiData';
import { getWeatherForOneDay } from 'api/weather/getWeatherForOneDay';
import { getWeatherForManyDays } from 'api/weather/getWeatherForManyDays';

export function setCity(e: FormEvent<HTMLFormElement>, city: string): void {
    e.preventDefault();
    localStorage.setItem(CITY, city);
    getWeatherForManyDays();
    getWeatherForOneDay();
}
