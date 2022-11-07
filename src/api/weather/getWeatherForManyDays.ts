import { CITY, INITIAL_CITY, TOKEN, URL_HOME, URL_WEATHER } from 'api/weather/weatherApiData';
import { daysAction } from 'reduxToolkit/slices/weatherForManyDays';
import { store } from 'reduxToolkit/store';
import { isErrorApiForManyDays, isLoadingWeatherForManyDays } from "reduxToolkit/slices/isLoading";

export function getWeatherForManyDays(): void {
    let location: string | null = localStorage.getItem(CITY);

    if (!location) {
        location = INITIAL_CITY;
    }
    fetch(URL_WEATHER, {
        method: 'Post',
        headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            days: 7,
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
            store.dispatch(daysAction(result.forecast));
            store.dispatch(
                isLoadingWeatherForManyDays({
                    isLoadingWeatherForManyDays: false,
                })
            );
        })
        .catch(() => {
            store.dispatch(isErrorApiForManyDays({
                isErrorApiForManyDays: true,
            }))
        });
}
