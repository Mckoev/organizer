import React from 'react'
import './weather.css'
import Location from '../../components/weather/Location'
import { useAppSelector } from '../../reduxToolkit/hooks'

function Weather() {
  const minTemp = useAppSelector((state) => state.toolkitSliceDays.arrState[0].minTemp)
  const maxTemp = useAppSelector((state) => state.toolkitSliceDays.arrState[0].maxTemp)
  const icon = useAppSelector((state) => state.toolkitSliceDays.arrState[0].icon)
  const wind = useAppSelector((state) => state.toolkit.maxWind)
  const wind_direction = useAppSelector((state) => state.toolkit.windDirection)
  const humidity = useAppSelector((state) => state.toolkit.humidity)

  const day1 = {
    date: useAppSelector((state) => state.toolkitSliceDays.arrState[1].date),
    icon: useAppSelector((state) => state.toolkitSliceDays.arrState[1].icon),
    maxTemp: useAppSelector((state) => state.toolkitSliceDays.arrState[1].maxTemp),
    minTemp: useAppSelector((state) => state.toolkitSliceDays.arrState[1].minTemp),
  }

  const day2 = {
    date: useAppSelector((state) => state.toolkitSliceDays.arrState[2].date),
    icon: useAppSelector((state) => state.toolkitSliceDays.arrState[2].icon),
    maxTemp: useAppSelector((state) => state.toolkitSliceDays.arrState[2].maxTemp),
    minTemp: useAppSelector((state) => state.toolkitSliceDays.arrState[2].minTemp),
  }

  const day3 = {
    date: useAppSelector((state) => state.toolkitSliceDays.arrState[3].date),
    icon: useAppSelector((state) => state.toolkitSliceDays.arrState[3].icon),
    maxTemp: useAppSelector((state) => state.toolkitSliceDays.arrState[3].maxTemp),
    minTemp: useAppSelector((state) => state.toolkitSliceDays.arrState[3].minTemp),
  }

  return (
    <div className="page page-weather">
      <div className="bg"></div>
      <div className="overlay"></div>
      <div className="panel panel-now">
        <div className="mainInfo">
          <img src={icon} />
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
            <i className="wi wi-strong-wind"></i>
            <span className="value">{wind} km/h</span>
          </div>
          <div className="info">
            <i className="wi wi-wind-default _150-deg"></i>
            <span className="value">{wind_direction}</span>
          </div>
          <div className="info">
            <i className="wi wi-sprinkles"></i>
            <span className="value">{humidity} </span>
          </div>
        </div>
      </div>
      <Location />
      <div className="panel panel-forecast">
        <div className="box">
          <div className="title">Tue</div>

          <img src={day1.icon} />
          <div className="temp">
            <span className="value">
              {day1.maxTemp}
              <span className="degree">&deg;C</span>
            </span>
            <span className="separator">/</span>
            <span className="value">
              {day1.minTemp}
              <span className="degree">&deg;C</span>
            </span>
          </div>
        </div>
        <div className="box">
          <div className="title">Wed</div>
          <img src={day2.icon} />
          <div className="temp">
            <span className="value">
              {day2.maxTemp}
              <span className="degree">&deg;C</span>
            </span>
            <span className="separator">/</span>
            <span className="value">
              {day2.minTemp}
              <span className="degree">&deg;C</span>
            </span>
          </div>
        </div>
        <div className="box">
          <div className="title">Thu</div>
          <img src={day3.icon} />
          <div className="temp">
            <span className="value">
              {day3.maxTemp}
              <span className="degree">&deg;C</span>
            </span>
            <span className="separator">/</span>
            <span className="value">
              {day3.minTemp}
              <span className="degree">&deg;C</span>
            </span>
          </div>
        </div>
        <div className="box">
          <div className="title">Fri</div>
          <img src="http://ultraimg.com/images/t8VL5lw.png" />
          <div className="temp">
            <span className="value">
              16<span className="degree">&deg;C</span>
            </span>
            <span className="separator">/</span>
            <span className="value">
              9<span className="degree">&deg;C</span>
            </span>
          </div>
        </div>
        <div className="box">
          <div className="title">Sat</div>
          <img src="http://ultraimg.com/images/Paf07R1.png" />
          <div className="temp">
            <span className="value">
              20<span className="degree">&deg;C</span>
            </span>
            <span className="separator">/</span>
            <span className="value">
              13<span className="degree">&deg;C</span>
            </span>
          </div>
        </div>
        <div className="box">
          <div className="title">Sun</div>
          <img src="http://ultraimg.com/images/bosikG0.png" />
          <div className="temp">
            <span className="value">
              26<span className="degree">&deg;C</span>
            </span>
            <span className="separator">/</span>
            <span className="value">
              22<span className="degree">&deg;C</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Weather.propTypes = {}

export default Weather
