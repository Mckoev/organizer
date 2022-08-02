import React from 'react'
import PropTypes from 'prop-types'
import { useAppSelector } from '../../reduxToolkit/hooks'

function Box() {
  const weatherDays = useAppSelector((state) => state.toolkitSliceDays.arrState)
  const DAYS = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT']

  const listItems = weatherDays.map((el, index) => (
    <div className="box" key={index}>
      <div className="title">{DAYS[new Date(el.date).getDay()]}</div>
      <img src={el.icon} />
      <div className="temp">
        <span className="value">
          {el.maxTemp}
          <span className="degree">&deg;C</span>
        </span>
        <span className="separator">/</span>
        <span className="value">
          {el.minTemp}
          <span className="degree">&deg;C</span>
        </span>
      </div>
    </div>
  ))

  return <div className="panel panel-forecast">{listItems}</div>
}

Box.propTypes = {}

export default Box
