import { useEffect } from 'react';
import { getWeatherForManyDays } from 'api/weather/getWeatherForManyDays';
import FormWeather from 'components/Weather/FormWeather';
import classNames from 'classnames/bind';
import styles from 'pages/weather/weather.module.scss';

function Location() {
    useEffect(() => getWeatherForManyDays(), []);

    const cx = classNames.bind(styles);

    return (
        <div className={cx('panelNow', 'panel_loc_right')}>
            <div className={styles.textField}>
                <FormWeather />
            </div>
        </div>
    );
}

export default Location;
