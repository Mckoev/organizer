import React from 'react'
import './weather.css'
import Location from '../../components/weather/Location'
import Forecast from '../../components/weather/Forecast'
import PanelNow from '../../components/weather/PanelNow'

function Weather() {
  return (
    <div className="page page-weather">
      <div className="bg"></div>
      <div className="overlay"></div>
      <PanelNow />
      <Location />
      <Forecast />
    </div>
  )
}

Weather.propTypes = {}

export default Weather
