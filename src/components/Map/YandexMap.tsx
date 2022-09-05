import { Map, YMaps } from 'react-yandex-maps';
import { useAppSelector } from '../../reduxToolkit/hooks';
import { IMapData } from '../../types/interfaices';

function YandexMap() {
    const width: string = '100%';
    const height: string = '100%';
    const moscowLatitude: number = 55.75;
    const moscowLongitude: number = 37.62;
    const latitude: string | null = useAppSelector((state) => state.weatherForOneDay.latitude);
    const longitude: string | null = useAppSelector((state) => state.weatherForOneDay.longitude);

    const latitudeForMap: string | number = latitude || moscowLatitude;
    const longitudeForMap: string | number = longitude || moscowLongitude;
    const mapData: IMapData = { center: [+latitudeForMap, +longitudeForMap], zoom: 10 };

    return (
        <YMaps>
            <Map state={mapData} width={width} height={height} />
        </YMaps>
    );
}

export default YandexMap;
