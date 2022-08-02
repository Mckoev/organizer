import React from 'react'
import PropTypes from 'prop-types'
import { useAppSelector } from '../../reduxToolkit/hooks'

function PanelNow() {
  const minTemp = useAppSelector((state) => state.toolkitSliceDays.arrState[0].minTemp)
  const maxTemp = useAppSelector((state) => state.toolkitSliceDays.arrState[0].maxTemp)
  const icon = useAppSelector((state) => state.toolkitSliceDays.arrState[0].icon)
  const wind = useAppSelector((state) => state.toolkit.maxWind)
  const wind_direction = useAppSelector((state) => state.toolkit.windDirection)
  const humidity = useAppSelector((state) => state.toolkit.humidity)

  return (
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
          <span className="value">{wind} km/h</span>
        </div>
        <div className="info">
          <span className="value">{wind_direction}</span>
        </div>
        <div className="info">
          <span className="value">{humidity} </span>
        </div>
      </div>
    </div>
  )
}

PanelNow.propTypes = {}

export default PanelNow
