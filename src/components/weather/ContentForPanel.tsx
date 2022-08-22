import React from 'react';
import {useAppSelector} from "../../reduxToolkit/hooks";

function ContentForPanel() {

    const minTemp: string = useAppSelector((state) => state.toolkitSliceWeatherForManyDays.arrState[0].minTemp)
    const maxTemp: string = useAppSelector((state) => state.toolkitSliceWeatherForManyDays.arrState[0].maxTemp)
    const icon_url: string = useAppSelector((state) => state.toolkitSliceWeatherForManyDays.arrState[0].icon_url)
    const wind: string = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.maxWind)
    const wind_direction: string = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.windDirection)
    const humidity: string = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.humidity)

    return (
        <>
            <div className="mainInfo">
                <img src={icon_url} alt='icon'/>
                <div className="temp">
          <span className="value">
            {maxTemp}
              <span className="degree">&deg;C</span>
          </span>
                    <span className="separator">/</span>
                    <span className="value">
            {minTemp}
                        <span className="degree">&deg;C</span>
          </span>
                </div>
            </div>
            <div className="row">
                <div className="info">
                    <span className="value">{wind} km/h</span>
                </div>
                <div className="info">
                    <span className="value">{wind_direction}</span>
                </div>
                <div className="info">
                    <span className="value">{humidity} </span>
                </div>
            </div>
        </>
    );
}

ContentForPanel.propTypes = {};

export default ContentForPanel;