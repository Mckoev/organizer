import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'reduxToolkit/hooks';
import classNames from 'classnames/bind';
import styles from 'pages/home/home.module.scss';
import { getWeatherForOneDay } from 'api/weather/getWeatherForOneDay';
import Spinner from '../../pages/spinner/Spinner';
import PanelHomePage from './PanelHomePage';

function WeatherHome() {
    const isLoadingWeatherForOneDay: boolean = useAppSelector((state) => state.isLoading.isLoadingWeatherForOneDay);
    const location: string | null = useAppSelector((state) => state.weatherForOneDay.location);
    const country: string | null = useAppSelector((state) => state.weatherForOneDay.country);

    useEffect(() => getWeatherForOneDay(), []);

    const cx = classNames.bind(styles);

    return (
        <div className={cx('panel', 'panelWeather')}>
            {isLoadingWeatherForOneDay ? <Spinner /> : <PanelHomePage />}
            <Link to='/weather'>
                <div className={cx('span', 'text')}>
                    {location}, {country}
                </div>
            </Link>
        </div>
    );
}

export default WeatherHome;
