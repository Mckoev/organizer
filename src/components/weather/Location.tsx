import React, { useEffect } from 'react'
import { useAppSelector } from '../../reduxToolkit/hooks'
import { getWeatherForManyDays } from '../../api/weather/getWeatherForManyDays'
import Form from '../Form'

function Location() {
  useEffect(function () {
    getWeatherForManyDays()
  }, [])

  let st = useAppSelector((state) => state)

  return (
    <div className="panel panel-location">
      <div className="text-field text-field_floating-2">
        <Form />
      </div>
    </div>
  )
}

Location.propTypes = {}

export default Location
