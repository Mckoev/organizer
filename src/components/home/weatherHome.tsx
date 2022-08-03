import React, { useEffect } from 'react'
import Spinner from '../../pages/spinner/Spinner'
import { useAppSelector } from '../../reduxToolkit/hooks'
import Panel from './Panel'
import { getWeatherForOneDay } from '../../helpers/getWeatherForOneDay'

function WeatherHome() {
  const isLoading = useAppSelector((state) => state.toolkitSliceIsLoading.isLoading)
  const location = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.location)

  useEffect(function () {
    getWeatherForOneDay(location)
  }, [])

  const st = useAppSelector((state) => state)

  function handler() {
    console.log(st)
  }

  return (
    <div className="panel panel-weather">
      {isLoading ? <Spinner /> : <Panel />}

      <button onClick={() => handler()}>BTNBTNBTNBTNBTNBTNBTNBTNBTNBTNBTNBTNBTNBTNBTNBTN</button>
    </div>
  )
}

WeatherHome.propTypes = {}

export default WeatherHome
