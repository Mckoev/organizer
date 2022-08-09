import React from 'react';
import {Map, YMaps} from "react-yandex-maps";
import {useAppSelector} from "../../reduxToolkit/hooks";

function YandexMap() {

    const width: string = '100%'
    const height: string = '100%'
    const moscowLatitude: number = 55.75
    const moscowLongitude: number = 37.62
    const latitude: string | null = useAppSelector(state => state.toolkitSliceWeatherForOneDay.latitude)
    const longitude: string | null = useAppSelector(state => state.toolkitSliceWeatherForOneDay.longitude)

    const latitudeForMap: string | number= (latitude) ? latitude : moscowLatitude
    const longitudeForMap: string | number= (longitude) ? longitude : moscowLongitude
    let mapData = {center: [+latitudeForMap, +longitudeForMap], zoom: 10}

    return (
        <YMaps>
            <Map state={mapData} width={width} height={height}/>
        </YMaps>
    );
}

YandexMap.propTypes = {};

export default YandexMap;