import { Link } from 'react-router-dom';
import './icons.css';

function Icons() {
    return (
        <div className='main-icons' style={{ display: 'block' }}>
            <div className='panel panel-functions'>
                <div className='icon icon-weather' data-page='home'>
                    <Link to='/'>
                        <img src={require('../../img/home.png')} alt='home' />
                    </Link>
                </div>
                <div className='icon icon-weather' data-page='weather'>
                    <Link to='/weather'>
                        <img src={require('../../img/sunBig.png')} alt='sun' />
                    </Link>
                </div>
                <div className='icon icon-calendar' data-page='calendar'>
                    <Link to='/calendar'>
                        <img
                            src={require('../../img/calendar.png')}
                            alt='calendar'
                        />
                    </Link>
                </div>
                <div className='icon icon-map' data-page='map'>
                    <Link to='/map'>
                        <img src={require('../../img/maps.png')} alt='map' />
                    </Link>
                </div>
                <div className='icon icon-tasks' data-page='tasks'>
                    <Link to='/lists'>
                        <img src={require('../../img/task.png')} alt='task' />
                    </Link>
                </div>
                <div className='icon icon-news' data-page='news'>
                    <Link to='/news'>
                        <img src={require('../../img/news.png')} alt='news' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Icons;
