import React from 'react'
import Spinner from "../../pages/spinner/Spinner";
import {useAppSelector} from "../../reduxToolkit/hooks";
import ContentForPanel from "./ContentForPanel";

function PanelWeatherPage() {
  const isLoadingWeatherForManyDays = useAppSelector((state) => state.toolkitSliceIsLoading.isLoadingWeatherForManyDays)


  return (
    <div className="panel panel-now">
      {isLoadingWeatherForManyDays ? <Spinner /> : <ContentForPanel />}
    </div>
  )
}

PanelWeatherPage.propTypes = {}

export default PanelWeatherPage
