import { useAppSelector } from '../../reduxToolkit/hooks';

function ContentForPanel() {
    const minTemp: string = useAppSelector(
        (state) => state.weatherForManyDays.arrState[0].minTemp
    );
    const maxTemp: string = useAppSelector(
        (state) => state.weatherForManyDays.arrState[0].maxTemp
    );
    const iconUrl: string = useAppSelector(
        (state) => state.weatherForManyDays.arrState[0].icon_url
    );
    const wind: string = useAppSelector(
        (state) => state.weatherForOneDay.maxWind
    );
    const windDirection: string = useAppSelector(
        (state) => state.weatherForOneDay.windDirection
    );
    const humidity: string = useAppSelector(
        (state) => state.weatherForOneDay.humidity
    );

    return (
        <>
            <div className='mainInfo'>
                <img src={iconUrl} alt='icon' />
                <div className='temp'>
                    <span className='value'>
                        {maxTemp}
                        <span className='degree'>&deg;C</span>
                    </span>
                    <span className='separator'>/</span>
                    <span className='value'>
                        {minTemp}
                        <span className='degree'>&deg;C</span>
                    </span>
                </div>
            </div>
            <div className='row'>
                <div className='info'>
                    <span className='value'>{wind} km/h</span>
                </div>
                <div className='info'>
                    <span className='value'>{windDirection}</span>
                </div>
                <div className='info'>
                    <span className='value'>{humidity} </span>
                </div>
            </div>
        </>
    );
}

export default ContentForPanel;
