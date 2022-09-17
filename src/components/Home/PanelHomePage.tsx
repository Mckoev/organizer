import { useAppSelector } from 'reduxToolkit/hooks';
import classNames from 'classnames/bind';
import styles from 'pages/home/home.module.scss';

function PanelHomePage() {
    const temp: string = useAppSelector((state) => state.weatherForOneDay.temp);
    const condition: string = useAppSelector((state) => state.weatherForOneDay.condition);
    const iconUrl: string = useAppSelector((state) => state.weatherForOneDay.icon_url);

    const cx = classNames.bind(styles);

    return (
        <>
            <div className={styles.condition}>{condition}</div>
            <img src={iconUrl} alt='icon' />
            <div className={cx('span', 'temp')}>
                {temp}
                <span className={styles.degree}>&deg;C</span>
            </div>
        </>
    );
}

export default PanelHomePage;
