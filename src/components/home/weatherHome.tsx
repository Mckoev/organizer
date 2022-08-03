import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getWeatherForOneDay } from '../../helpers/getWeatherForOneDay'
import { useAppSelector } from '../../reduxToolkit/hooks'

function WeatherHome() {
  const location = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.location)
  const country = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.country)
  const temp = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.temp)
  const condition = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.condition)
  const icon_url = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.icon_url)

  console.log(location)

  const stateWeather = useAppSelector((state) => state)

  function handler() {
    console.log(stateWeather)
  }

  useEffect(function () {
    getWeatherForOneDay(location)
  }, [])

  return (
    <div className="panel panel-weather">
      <div className="condition">{condition}</div>
      <img src={icon_url} />
      <div className="span temp">
        {temp}
        <span className="degree">&deg;C</span>
      </div>
      <Link to="/weather">
        <div className="span text">
          {location}, {country}
        </div>
      </Link>
      {/* <button onClick={() => handler()}>BTN</button> */}
    </div>
  )
}

WeatherHome.propTypes = {}

export default WeatherHome
