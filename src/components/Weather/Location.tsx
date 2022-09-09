import { useEffect } from 'react';
import { getWeatherForManyDays } from 'api/weather/getWeatherForManyDays';
import Form from '../Form';

function Location() {
    useEffect(() => getWeatherForManyDays(), []);

    return (
        <div className='panel panel-location'>
            <div className='text-field text-field_floating'>
                <Form />
            </div>
        </div>
    );
}

export default Location;
