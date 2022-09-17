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
                <img src={iconUrl} alt='icon' />
                <div className={styles.temp}>
                    <span className={styles.value}>
                        {maxTemp}
                        <span className={styles.degree}>&deg;C</span>
                    </span>
                    <span className={styles.separator}>/</span>
                    <span className={styles.value}>
                        {minTemp}
                        <span className={styles.degree}>&deg;C</span>
                    </span>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.info}>
                    <span className={styles.value}>{wind} km/h</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.value}>{windDirection}</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.value}>{humidity} </span>
                </div>
            </div>
        </>
    );
}

export default ContentForPanel;
