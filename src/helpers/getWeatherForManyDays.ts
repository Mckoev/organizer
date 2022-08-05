import {URL_WEATHER, TOKEN, METHODS, URL_HOME, INITIAL_CITY} from './API'
import {store} from '../reduxToolkit/store'
import {daysAction} from '../reduxToolkit/toolkitSliceWeatherForManyDays'
import {isLoadingWeatherForManyDays} from "../reduxToolkit/toolkitSliceIsLoading";
import {CITY, getLocalStorage} from "./localStorage";

export function getWeatherForManyDays(): void {

    let location: string | null = getLocalStorage(CITY)

    if (!location) {
        location = INITIAL_CITY
    }
    fetch(URL_WEATHER, {
        method: METHODS.POST,
        headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            days: 7,
            location: location,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Could not fetch ${URL_HOME}, received ${response.status}`)
            }
            return response.json()
        })
        .then((result) => {
            store.dispatch(daysAction(result.forecast))
            store.dispatch(isLoadingWeatherForManyDays({'isLoadingWeatherForManyDays': false}))
        })
        .catch((err) => {
            console.error('Could not fetch ' +  err)
        })
}
