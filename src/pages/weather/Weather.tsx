import './weather.css';
import Location from 'components/Weather/Location';
import Forecast from 'components/Weather/Forecast';
import PanelWeatherPage from 'components/Weather/PanelWeatherPage';

function Weather() {
    return (
        <div className='page page-weather'>
            <div className='overlay' />
            <PanelWeatherPage />
            <Location />
            <Forecast />
        </div>
    );
}

export default Weather;
