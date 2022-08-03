import React from 'react'
import PropTypes from 'prop-types'
import { useAppSelector } from '../../reduxToolkit/hooks'
import { Link } from 'react-router-dom'

function Panel() {
  const location = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.location)
  const country = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.country)
  const temp = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.temp)
  const condition = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.condition)
  const icon_url = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.icon_url)

  return (
    <>
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
    </>
  )
}

Panel.propTypes = {}

export default Panel
