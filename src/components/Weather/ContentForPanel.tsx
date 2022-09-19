import { useAppSelector } from 'reduxToolkit/hooks';
import styles from 'pages/weather/weather.module.scss';

function ContentForPanel() {
    const minTemp: string = useAppSelector((state) => state.weatherForManyDays.arrState[0].minTemp);
    const maxTemp: string = useAppSelector((state) => state.weatherForManyDays.arrState[0].maxTemp);
    const iconUrl: string = useAppSelector((state) => state.weatherForManyDays.arrState[0].icon_url);
    const wind: string = useAppSelector((state) => state.weatherForOneDay.maxWind);
    const windDirection: string = useAppSelector((state) => state.weatherForOneDay.windDirection);
    const humidity: string = useAppSelector((state) => state.weatherForOneDay.humidity);

    return (
        <>
            <div className={styles.mainInfo}>
                <img className={styles.mainInfo__img} src={iconUrl} alt='icon' />
                <div className={styles.mainInfo__temp}>
                    <span className={styles.mainInfo__value}>
                        {maxTemp}
                        <span className={styles.mainInfo__degree}>&deg;C</span>
                    </span>
                    <span className={styles.mainInfo__separator}>/</span>
                    <span className={styles.mainInfo__value}>
                        {minTemp}
                        <span className={styles.mainInfo__degree}>&deg;C</span>
                    </span>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.row__info}>
                    <span className={styles.row__description}>SP: </span>
                    <span className={styles.row__value}>{wind} km/h</span>
                </div>
                <div className={styles.row__info}>
                    <span className={styles.row__description}>DIRECT: </span>
                    <span className={styles.row__value}>{windDirection}</span>
                </div>
                <div className={styles.row__info}>
                    <span className={styles.row__description}>HUMID: </span>
                    <span className={styles.row__value}>{humidity} %</span>
                </div>
            </div>
        </>
    );
}

export default ContentForPanel;
