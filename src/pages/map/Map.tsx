import { useEffect } from 'react';
import './map.css';
import YandexMap from 'components/Map/YandexMap';
import { useAppSelector } from 'reduxToolkit/hooks';
import Form from 'components/Form';
import { getWeatherForOneDay } from 'api/weather/getWeatherForOneDay';
import Spinner from '../spinner/Spinner';

function Map() {
    useEffect(() => getWeatherForOneDay(), []);

    const isLoadingWeatherForOneDay: boolean = useAppSelector((state) => state.isLoading.isLoadingWeatherForOneDay);

    return (
        <div className='page page-map'>
            <div className='overlay' />
            <div className='title'>
                <Form />
            </div>
            <div className='map'>{isLoadingWeatherForOneDay ? <Spinner /> : <YandexMap />}</div>
        </div>
    );
}

export default Map;
