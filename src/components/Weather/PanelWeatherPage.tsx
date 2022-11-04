import { useAppSelector } from "reduxToolkit/hooks";
import styles from "pages/weather/weather.module.scss";
import Spinner from "../../pages/spinner/Spinner";
import ContentForPanel from "./ContentForPanel";

function PanelWeatherPage() {
    const isLoadingWeatherForManyDays: boolean = useAppSelector((state) => state.isLoading.isLoadingWeatherForManyDays);

    return <div className={styles.panelNow}>{isLoadingWeatherForManyDays ? <Spinner /> : <ContentForPanel />}</div>;
}

export default PanelWeatherPage;
