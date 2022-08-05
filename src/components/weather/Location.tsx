import React, {FormEvent, useEffect, useState} from 'react'
import { useAppSelector } from '../../reduxToolkit/hooks'
import { getWeatherForManyDays } from '../../helpers/getWeatherForManyDays'
import { getWeatherForOneDay } from '../../helpers/getWeatherForOneDay'
import {INITIAL_CITY} from "../../helpers/API";
import {CITY, setLocalStorage} from "../../helpers/localStorage";

function Location() {

  const [inputCityValue, setInputCityValue] = useState(INITIAL_CITY)
  const location = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.location)
  const country = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.country)

  function handler(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    setLocalStorage( CITY, inputCityValue)
    getWeatherForManyDays()
    getWeatherForOneDay()
  }

  useEffect(function () {
    getWeatherForManyDays()
  }, [])

  const st = useAppSelector((state) => state)

  return (
    <div className="panel panel-location">
      <div className="text-field text-field_floating-2">
        <form onSubmit={(e) => handler(e)}>
          <input className="text-field__input" type="name" id="name" name="city" onChange={(e) => setInputCityValue(e.target.value)}/>
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
