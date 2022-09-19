import 'pages/home/home.module.scss';
import PanelWeather from 'components/Home/PanelWeather';
import PanelCalendar from 'components/Home/PanelCalendar';
import PanelTasks from 'components/Home/PanelTasks';
import PanelTime from 'components/Home/PanelTime';
import styles from './home.module.scss';

function Home() {
    return (
        <div className={styles.home}>
            <PanelTime />
            <PanelWeather />
            <PanelCalendar />
            <PanelTasks />
        </div>
    );
}

export default Home;
