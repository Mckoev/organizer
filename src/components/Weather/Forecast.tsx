import { useAppSelector } from "reduxToolkit/hooks";
import { IWeatherBox } from "types/interfaices";
import styles from "pages/weather/weather.module.scss";
import Spinner from "../../pages/spinner/Spinner";
import ContentForForecast from "./ContentForForecast";
import ApiError from "../Errors/ApiError/ApiError";
import Error from "../../pages/error/Error";

function Box() {
    const weatherDays: IWeatherBox[] = useAppSelector((state) => state.weatherForManyDays.arrState).slice(1);
    const isLoadingWeatherForManyDays: boolean = useAppSelector((state) => state.isLoading.isLoadingWeatherForManyDays);
    const isErrorApiForManyDays : boolean = useAppSelector((state) => state.isLoading. isErrorApiForManyDays );

    let notDownload;
    if (isErrorApiForManyDays) {
        notDownload = <Error><ApiError/></Error>
    } else {
        notDownload = <Spinner/>
    }

    const listItems = weatherDays.map((el) => (
        <div className={styles.box} key={el.id}>
            {isLoadingWeatherForManyDays ? notDownload : <ContentForForecast el={el} />}
        </div>
    ));

    return <div className={styles.panelForecast}>{listItems}</div>;
}

export default Box;
