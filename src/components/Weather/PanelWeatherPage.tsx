import { useAppSelector } from "reduxToolkit/hooks";
import styles from "pages/weather/weather.module.scss";
import Spinner from "../../pages/spinner/Spinner";
import ContentForPanel from "./ContentForPanel";
import ApiError from "../Errors/ApiError/ApiError";
import Error from "../../pages/error/Error";

function PanelWeatherPage() {
    const isLoadingWeatherForManyDays: boolean = useAppSelector((state) => state.isLoading.isLoadingWeatherForManyDays);
    const isErrorApiForManyDays : boolean = useAppSelector((state) => state.isLoading. isErrorApiForManyDays );
    const isErrorApiForOneDay : boolean = useAppSelector((state) => state.isLoading. isErrorApiForOneDay );

    let notDownload;
    if (isErrorApiForOneDay || isErrorApiForManyDays) {
        notDownload = <Error><ApiError/></Error>
    } else {
        notDownload = <Spinner/>
    }

    return <div className={styles.panelNow}>{isLoadingWeatherForManyDays ? notDownload : <ContentForPanel />}</div>;
}

export default PanelWeatherPage;
