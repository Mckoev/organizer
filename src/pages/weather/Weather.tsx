import React from 'react'
import './weather.css'
import Location from '../../components/weather/Location'
import Forecast from '../../components/weather/Forecast'
import PanelWeatherPage from '../../components/weather/PanelWeatherPage'

function Weather() {

  return (
    <div className="page page-weather">
      <div className="bg"></div>
      <div className="overlay"></div>
      <PanelWeatherPage />
      <Location />
      <Forecast />
    </div>
  )
}

Weather.propTypes = {}

export default Weather
