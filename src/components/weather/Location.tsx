import React, { useEffect } from 'react'
import { useAppSelector } from '../../reduxToolkit/hooks'
import { getWeatherForManyDays } from '../../helpers/getWeatherForManyDays'
import { getWeatherForOneDay } from '../../helpers/getWeatherForOneDay'

function Location() {
  const location = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.location)
  const country = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.country)

  function handler(e: any): void {
    e.preventDefault()
    getWeatherForManyDays(e.target[0].value)
    getWeatherForOneDay(e.target[0].value)
  }

  useEffect(function () {
    getWeatherForManyDays(location)
  }, [])

  const st = useAppSelector((state) => state)

  return (
    <div className="panel panel-location">
      <div className="text-field text-field_floating-2">
        <form onSubmit={(e) => handler(e)}>
          <input className="text-field__input" type="name" id="name" name="city" />
          <label className="text-field__label" htmlFor="name">
            {location}, {country}
          </label>
        </form>
      </div>
    </div>
  )
}

Location.propTypes = {}

export default Location
