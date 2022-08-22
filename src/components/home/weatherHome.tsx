import React, { useEffect } from 'react'
import Spinner from '../../pages/spinner/Spinner'
import { useAppSelector } from '../../reduxToolkit/hooks'
import PanelHomePage from './PanelHomePage'
import { getWeatherForOneDay } from '../../api/weather/getWeatherForOneDay'
import { Link } from 'react-router-dom'

function WeatherHome() {
  const isLoadingWeatherForOneDay = useAppSelector((state) => state.toolkitSliceIsLoading.isLoadingWeatherForOneDay)
  const location = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.location)
  const country = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.country)

  useEffect(function () {
    getWeatherForOneDay()
  }, [])

  const st = useAppSelector((state) => state)

  function handler() {
    console.log(st)
  }

  return (
    <div className="panel panel-weather">
      {isLoadingWeatherForOneDay ? <Spinner /> : <PanelHomePage />}
      <Link to="/weather">
        <div className="span text">
          {location}, {country}
        </div>
      </Link>
    </div>
  )
}

WeatherHome.propTypes = {}

export default WeatherHome
