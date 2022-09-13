import { FormEvent, useState } from 'react';
import { INITIAL_CITY } from 'api/weather/weatherApiData';
import { useAppSelector } from 'reduxToolkit/hooks';
import { getWeatherForManyDays } from 'api/weather/getWeatherForManyDays';
import { getWeatherForOneDay } from 'api/weather/getWeatherForOneDay';
import { setCity } from 'helpers/setCity';

export const useFormLogic = () => {
    const [inputCityValue, setInputCityValue] = useState<string>(INITIAL_CITY);
    const location: string | null = useAppSelector((state) => state.weatherForOneDay.location);
    const country: string | null = useAppSelector((state) => state.weatherForOneDay.country);

    function setInputCity(city: string): void {
        if (city.length) {
            const cityUpper: string = city[0].toUpperCase() + city.slice(1);
            setInputCityValue(cityUpper);
        }
    }

    function changeCity(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        setCity(e, inputCityValue);
        getWeatherForManyDays();
        getWeatherForOneDay();
    }

    return {
        changeCity,
        setInputCity,
        country,
        location,
    };
};
