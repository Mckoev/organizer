import React from 'react'
import { useAppSelector } from '../../reduxToolkit/hooks'
import Spinner from '../../pages/spinner/Spinner'
import ContentForForecast from './ContentForForecast'

function Box() {
  const weatherDays = useAppSelector((state) => state.toolkitSliceWeatherForManyDays.arrState).slice(1)
  const isLoadingWeatherForManyDays = useAppSelector((state) => state.toolkitSliceIsLoading.isLoadingWeatherForManyDays)

  const listItems = weatherDays.map((el, index) => (
    <div className="box" key={index}>
      {isLoadingWeatherForManyDays ? <Spinner /> : <ContentForForecast el={el} />}
      <Spinner />
    </div>
  ))

  return <div className="panel panel-forecast">{listItems}</div>
}

Box.propTypes = {}

export default Box
