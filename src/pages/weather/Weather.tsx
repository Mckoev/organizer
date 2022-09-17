import 'pages/weather/weather.module.scss';
import Location from 'components/Weather/Location';
import Forecast from 'components/Weather/Forecast';
import PanelWeatherPage from 'components/Weather/PanelWeatherPage';
import classNames from 'classnames/bind';
import styles from './weather.module.scss';

function Weather() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('page', 'pageWeather')}>
            <div className={styles.overlay} />
            <PanelWeatherPage />
            <Location />
            <Forecast />
        </div>
    );
}

export default Weather;
