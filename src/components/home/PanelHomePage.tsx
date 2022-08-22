import React from 'react'
import { useAppSelector } from '../../reduxToolkit/hooks'

function PanelHomePage() {
  const temp: string = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.temp)
  const condition: string = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.condition)
  const icon_url: string = useAppSelector((state) => state.toolkitSliceWeatherForOneDay.icon_url)

  return (
    <>
      <div className="condition">{condition}</div>
      <img src={icon_url} alt='icon'/>
      <div className="span temp">
        {temp}
        <span className="degree">&deg;C</span>
      </div>
    </>
  )
}

PanelHomePage.propTypes = {}

export default PanelHomePage
