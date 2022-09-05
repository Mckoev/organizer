import './home.css';
import TimeHome from '../../components/Home/TimeHome';
import WeatherHome from '../../components/Home/WeatherHome';
import PanelTasks from '../../components/Home/PanelTasks';
import PanelCalendarHome from '../../components/Home/PanelCalendarHome';

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
