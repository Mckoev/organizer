import { useEffect } from "react";
import YandexMap from "components/Map/YandexMap";
import { useAppSelector } from "reduxToolkit/hooks";
import FormMap from "components/Map/FormMap";
import { getWeatherForOneDay } from "api/weather/getWeatherForOneDay";
import Spinner from "../spinner/Spinner";
import styles from "./map.module.scss";

function Map() {
    useEffect(() => getWeatherForOneDay(), []);

    const isLoadingWeatherForOneDay: boolean = useAppSelector((state) => state.isLoading.isLoadingWeatherForOneDay);


    return (
        <div className={styles.pageMap}>
            <FormMap />
            <div className={`${styles.map} ${styles.pageMap__map}`}>{isLoadingWeatherForOneDay ? <Spinner /> : <YandexMap />}</div>
        </div>
    );
}

export default Map;
