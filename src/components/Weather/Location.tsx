import { useEffect } from "react";
import { getWeatherForManyDays } from "api/weather/getWeatherForManyDays";
import FormWeather from "components/Weather/FormWeather";
import styles from "pages/weather/weather.module.scss";

function Location() {
    useEffect(() => getWeatherForManyDays(), []);

    return (
        <div className={styles.panelNow}>
            <div className={styles.textField}>
                <FormWeather />
            </div>
        </div>
    );
}

export default Location;
