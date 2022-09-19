import { Link } from 'react-router-dom';
import homeIcon from 'img/home.png';
import sunBigIcon from 'img/sunBig.png';
import calendarIcon from 'img/calendar.png';
import mapIcon from 'img/maps.png';
import taskIcon from 'img/task.png';
import newsIcon from 'img/news.png';
import styles from './icons.module.scss';

function Icons() {
    return (
        <div className={styles.panelIcons}>
            <div className={styles.panelIcons__icon} data-page='home'>
                <Link to='/'>
                    <img className={styles.panelIcons__img} src={homeIcon} alt='home' />
                </Link>
            </div>
            <div className={styles.panelIcons__icon} data-page='weather'>
                <Link to='/weather'>
                    <img className={styles.panelIcons__img} src={sunBigIcon} alt='sun' />
                </Link>
            </div>
            <div className={styles.panelIcons__icon} data-page='calendar'>
                <Link to='/calendar'>
                    <img className={styles.panelIcons__img} src={calendarIcon} alt='calendar' />
                </Link>
            </div>
            <div className={styles.panelIcons__icon} data-page='map'>
                <Link to='/map'>
                    <img className={styles.panelIcons__img} src={mapIcon} alt='map' />
                </Link>
            </div>
            <div className={styles.panelIcons__icon} data-page='tasks'>
                <Link to='/lists'>
                    <img className={styles.panelIcons__img} src={taskIcon} alt='task' />
                </Link>
            </div>
            <div className={styles.panelIcons__icon} data-page='news'>
                <Link to='/news'>
                    <img className={styles.panelIcons__img} src={newsIcon} alt='news' />
                </Link>
            </div>
        </div>
    );
}

export default Icons;
