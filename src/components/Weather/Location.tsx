import { useEffect } from 'react';
import { getWeatherForManyDays } from 'api/weather/getWeatherForManyDays';
import FormWeather from 'components/Weather/FormWeather';
import classNames from 'classnames/bind';
import styles from 'pages/weather/weather.module.scss';

function Location() {
    useEffect(() => getWeatherForManyDays(), []);

    const cx = classNames.bind(styles);

    return (
        <div className={cx('panel', 'panelLocation')}>
            <div className={cx('text-field', 'text-field_floating')}>
                <FormWeather />
            </div>
        </div>
    );
}

export default Location;
