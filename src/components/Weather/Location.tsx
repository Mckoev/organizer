import { useEffect } from 'react';
import { getWeatherForManyDays } from 'api/weather/getWeatherForManyDays';
import FormWeather from 'components/Weather/FormWeather';

function Location() {
    useEffect(() => getWeatherForManyDays(), []);

    return (
        <div className='panel panel-location'>
            <div className='text-field text-field_floating'>
                <FormWeather />
            </div>
        </div>
    );
}

export default Location;
