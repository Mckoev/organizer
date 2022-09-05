import './home.css';
import WeatherHome from 'components/Home/WeatherHome';
import PanelCalendarHome from 'components/Home/PanelCalendarHome';
import PanelTasks from 'components/Home/PanelTasks';
import TimeHome from 'components/Home/TimeHome';

function Home() {
    return (
        <div className='page page-home'>
            <div className='overlay' />
            <div className='panel panel-time'>
                <TimeHome />
            </div>
            <WeatherHome />
            <PanelCalendarHome />
            <PanelTasks />
        </div>
    );
}

export default Home;
