import './home.css'
import TimeHome from '../../components/home/timeHome'
import WeatherHome from '../../components/home/weatherHome'
import PanelTasks from '../../components/home/PanelTasks'

function Home() {
    return (
        <div className="page page-home" style={{display: 'block'}}>
            <div className="overlay"></div>
            <div className="panel panel-time">
                <TimeHome/>
            </div>
            <WeatherHome/>
            <div className="panel panel-calendar">
                <ul>
                    <li>
                        <div className="time">8:00 - 9:00</div>
                        <div className="title">Shopping</div>
                    </li>
                    <li>
                        <div className="time">10:00 - 12:00</div>
                        <div className="title">Meet Tom</div>
                    </li>
                    <li>
                        <div className="time">18:00 - 20:00</div>
                        <div className="title">Go to cinema</div>
                    </li>
                </ul>
            </div>
            <PanelTasks/>
        </div>
    )
}

export default Home
