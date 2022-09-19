import { IElement } from 'types/interfaices';
import { DAYS_RUS } from 'constants/constanst';
import styles from 'pages/weather/weather.module.scss';

function ContentForForecast({ el }: IElement) {
    return (
        <>
            <div className={styles.box__title}>{DAYS_RUS[new Date(el.date).getDay()]}</div>
            <img className={styles.box__img} src={el.icon_url} alt='icon weather' />
            <div className={styles.box__temp}>
                <span className={styles.box__value}>
                    {el.maxTemp}
                    <span className={styles.box__degree}>&deg;C</span>
                </span>
                <span className={styles.box__separator}>/</span>
                <span className={styles.box__value}>
                    {el.minTemp}
                    <span className={styles.box__degree}>&deg;C</span>
                </span>
            </div>
        </>
    );
}

export default ContentForForecast;
