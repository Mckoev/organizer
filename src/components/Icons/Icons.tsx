import { Link } from 'react-router-dom';
import homeIcon from 'img/home.png';
import sunBigIcon from 'img/sunBig.png';
import calendarIcon from 'img/calendar.png';
import mapIcon from 'img/maps.png';
import taskIcon from 'img/task.png';
import newsIcon from 'img/news.png';
import classNames from 'classnames/bind';
import styles from './icons.module.scss';

function Icons() {
    const cx = classNames.bind(styles);
    return (
        <div className={styles.mainIcons} style={{ display: 'block' }}>
            <div className={cx('panel', 'panel-functions')}>
                <div className={cx('icon', 'icon-weather')} data-page='home'>
                    <Link to='/'>
                        <img src={homeIcon} alt='home' />
                    </Link>
                </div>
                <div className={cx('icon', 'icon-weather')} data-page='weather'>
                    <Link to='/weather'>
                        <img src={sunBigIcon} alt='sun' />
                    </Link>
                </div>
                <div className={cx('icon', 'icon-calendar')} data-page='calendar'>
                    <Link to='/calendar'>
                        <img src={calendarIcon} alt='calendar' />
                    </Link>
                </div>
                <div className={cx('icon', 'icon-map')} data-page='map'>
                    <Link to='/map'>
                        <img src={mapIcon} alt='map' />
                    </Link>
                </div>
                <div className={cx('icon', 'icon-tasks')} data-page='tasks'>
                    <Link to='/lists'>
                        <img src={taskIcon} alt='task' />
                    </Link>
                </div>
                <div className={cx('icon', 'icon-news')} data-page='news'>
                    <Link to='/news'>
                        <img src={newsIcon} alt='news' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Icons;
