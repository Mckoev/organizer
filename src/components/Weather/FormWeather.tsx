import { useState } from 'react';
import { setCity } from 'helpers/setCity';
import { INITIAL_CITY } from 'api/weather/weatherApiData';
import { useAppSelector } from 'reduxToolkit/hooks';

function FormWeather() {
    const [inputCityValue, setInputCityValue] = useState<string>(INITIAL_CITY);
    const location: string | null = useAppSelector((state) => state.weatherForOneDay.location);
    const country: string | null = useAppSelector((state) => state.weatherForOneDay.country);

    function setInputCity(city: string): void {
        if (city.length) {
            const cityUpper: string = city[0].toUpperCase() + city.slice(1);
            setInputCityValue(cityUpper);
        }
    }

    /* eslint-disable*/

    return (
        <form className='weather-form' onSubmit={(e) => setCity(e, inputCityValue)}>
            <div>Enter the desired city:</div>
            <input className='text-field__input' type='name' id='name' name='city' onChange={(e) => setInputCity(e.target.value)} />
            <label className='text-field__label' htmlFor='name'>
                {location}, {country}
            </label>
            <button className='button-33' role='button'>
                Найти
            </button>
        </form>
    );
}

export default FormWeather;
