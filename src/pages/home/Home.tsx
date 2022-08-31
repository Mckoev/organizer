import './home.css'
import TimeHome from '../../components/home/timeHome'
import WeatherHome from '../../components/home/weatherHome'
import PanelTasks from '../../components/home/PanelTasks'
import PanelCalendarHome from "../../components/home/PanelCalendarHome";

function Home() {
    return (
        <div className="page page-home" style={{display: 'block'}}>
            <div className="overlay"></div>
            <div className="panel panel-time">
                <TimeHome/>
            </div>
            <WeatherHome/>
            <PanelCalendarHome/>
            <PanelTasks/>
        </div>
    )
}

export default Home
