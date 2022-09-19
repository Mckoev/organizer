import 'pages/weather/weather.module.scss';
import Location from 'components/Weather/Location';
import Forecast from 'components/Weather/Forecast';
import PanelWeatherPage from 'components/Weather/PanelWeatherPage';
import styles from './weather.module.scss';

function Weather() {
    return (
        <div className={styles.pageWeather}>
            <PanelWeatherPage />
            <Location />
            <Forecast />
        </div>
    );
}

export default Weather;
