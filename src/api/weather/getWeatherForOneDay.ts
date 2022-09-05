import { CITY, INITIAL_CITY, LATITUDE, LOCATION, LONGITUDE, TOKEN, URL_HOME } from 'api/weather/weatherApiData';
import { weatherAction } from 'reduxToolkit/slices/weatherForOneDay';
import { isLoadingWeatherForOneDay } from 'reduxToolkit/slices/isLoading';
import { store } from 'reduxToolkit/store';

export function getWeatherForOneDay(): void {
    let location: string | null = localStorage.getItem(CITY);

    if (!location) {
        location = INITIAL_CITY;
    }
    fetch(URL_HOME, {
        method: 'Post',
        headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            location,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Could not fetch ${URL_HOME}, received ${response.status}`);
            }
            return response.json();
        })
        .then((result) => {
            localStorage.setItem(LOCATION, result.country);
            localStorage.setItem(LATITUDE, result.latitude);
            localStorage.setItem(LONGITUDE, result.longitude);
            store.dispatch(weatherAction(result));
            store.dispatch(
                isLoadingWeatherForOneDay({
                    isLoadingWeatherForOneDay: false,
                })
            );
        })
        .catch((err) => {
            console.error(`Could not fetch ${err}`);
        });
}
