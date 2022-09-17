import 'pages/home/home.module.scss';
import WeatherHome from 'components/Home/WeatherHome';
import PanelCalendarHome from 'components/Home/PanelCalendarHome';
import PanelTasks from 'components/Home/PanelTasks';
import TimeHome from 'components/Home/TimeHome';
import classNames from 'classnames/bind';
import styles from './home.module.scss';

function Home() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('page', 'pageHome')}>
            <div className={styles.overlay} />
            <div className={cx('panel', 'panelTime')}>
                <TimeHome />
            </div>
            <WeatherHome />
            <PanelCalendarHome />
            <PanelTasks />
        </div>
    );
}

export default Home;
