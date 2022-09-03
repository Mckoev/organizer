import { useState } from 'react';
import { setCity } from '../helpers/setCity';
import { INITIAL_CITY } from '../api/weather/weatherApiData';
import { useAppSelector } from '../reduxToolkit/hooks';

function Form() {
    const [inputCityValue, setInputCityValue] = useState(INITIAL_CITY);
    const location: string | null = useAppSelector(
        (state) => state.weatherForOneDay.location
    );
    const country: string | null = useAppSelector(
        (state) => state.weatherForOneDay.country
    );

    function setInputCity(city: string): void {
        if (city.length) {
            const cityUpper: string = city[0].toUpperCase() + city.slice(1);
            setInputCityValue(cityUpper);
        }
    }

    return (
        <form onSubmit={(e) => setCity(e, inputCityValue)}>
            <input
                className='text-field__input'
                type='name'
                id='name'
                name='city'
                onChange={(e) => setInputCity(e.target.value)}
            />
            <label className='text-field__label' htmlFor='name'>
                {location}, {country}
            </label>
        </form>
    );
}

export default Form;
