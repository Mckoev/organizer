import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../pages/spinner/Spinner';
import { useAppSelector } from '../../reduxToolkit/hooks';
import PanelHomePage from './PanelHomePage';
import { getWeatherForOneDay } from '../../api/weather/getWeatherForOneDay';

function WeatherHome() {
    const isLoadingWeatherForOneDay = useAppSelector(
        (state) => state.isLoading.isLoadingWeatherForOneDay
    );
    const location = useAppSelector((state) => state.weatherForOneDay.location);
    const country = useAppSelector((state) => state.weatherForOneDay.country);

    useEffect(() => getWeatherForOneDay(), []);

    return (
        <div className='panel panel-weather'>
            {isLoadingWeatherForOneDay ? <Spinner /> : <PanelHomePage />}
            <Link to='/weather'>
                <div className='span text'>
                    {location}, {country}
                </div>
            </Link>
        </div>
    );
}

export default WeatherHome;
