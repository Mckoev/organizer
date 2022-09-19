import { useAppSelector } from 'reduxToolkit/hooks';
import styles from 'pages/home/home.module.scss';

function PanelHomePage() {
    const temp: string = useAppSelector((state) => state.weatherForOneDay.temp);
    const condition: string = useAppSelector((state) => state.weatherForOneDay.condition);
    const iconUrl: string = useAppSelector((state) => state.weatherForOneDay.icon_url);

    return (
        <>
            <div className={styles.panel__condition}>{condition}</div>
            <img className={styles.panel__img} src={iconUrl} alt='icon' />
            <div className={styles.panel__temp}>
                {temp}
                <span className={styles.panel__degree}>&deg;C</span>
            </div>
        </>
    );
}

export default PanelHomePage;
