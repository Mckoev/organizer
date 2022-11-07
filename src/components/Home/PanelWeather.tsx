import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'reduxToolkit/hooks';
import classNames from 'classnames/bind';
import styles from 'pages/home/home.module.scss';
import { getWeatherForOneDay } from 'api/weather/getWeatherForOneDay';
import Spinner from '../../pages/spinner/Spinner';
import PanelHomePage from './PanelHomePage';
import ApiError from "../Errors/ApiError/ApiError";
import Error from "../../pages/error/Error";

function PanelWeather() {
    const isLoadingWeatherForOneDay: boolean = useAppSelector((state) => state.isLoading.isLoadingWeatherForOneDay);
    const isErrorApiForOneDay : boolean = useAppSelector((state) => state.isLoading. isErrorApiForOneDay );
    const location: string | null = useAppSelector((state) => state.weatherForOneDay.location);
    const country: string | null = useAppSelector((state) => state.weatherForOneDay.country);

    useEffect(() => getWeatherForOneDay(), []);

    const cx = classNames.bind(styles);

    let content;
    if (isErrorApiForOneDay) {
        content = <Error><ApiError/></Error>
    } else if (isLoadingWeatherForOneDay){
        content = <Spinner/>
    } else {
        content = <PanelHomePage/>
    }


    return (
        <div className={cx('panel', 'home__panel', 'home__panel_width', 'home__panel_loc-right')}>
            {content}
            <Link to='/weather'>
                <div className={styles.text}>
                    {location}, {country}
                </div>
            </Link>
        </div>
    );
}

export default PanelWeather;
