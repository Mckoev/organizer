import { IElement } from 'types/interfaices';
import { DAYS_RUS } from 'constants/constanst';
import styles from 'pages/weather/weather.module.scss';

function ContentForForecast({ el }: IElement) {
    return (
        <>
            <div className={styles.title}>{DAYS_RUS[new Date(el.date).getDay()]}</div>
            <img src={el.icon_url} alt='icon weather' />
            <div className={styles.temp}>
                <span className={styles.value}>
                    {el.maxTemp}
                    <span className={styles.degree}>&deg;C</span>
                </span>
                <span className={styles.separator}>/</span>
                <span className={styles.value}>
                    {el.minTemp}
                    <span className={styles.degree}>&deg;C</span>
                </span>
            </div>
        </>
    );
}

export default ContentForForecast;
