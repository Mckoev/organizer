import {URL_HOME, TOKEN, METHODS, INITIAL_CITY} from './API'
import {store} from '../reduxToolkit/store'
import {weatherAction} from '../reduxToolkit/toolkitSliceWeatherForOneDay'
import {isLoadingWeatherForOneDay} from '../reduxToolkit/toolkitSliceIsLoading'
import {CITY, getLocalStorage, LOCATION, setLocalStorage} from "./localStorage";

export function getWeatherForOneDay(): void {
    let location: string | null = getLocalStorage(CITY)

    if (!location) {
        location = INITIAL_CITY
    }
    fetch(URL_HOME, {
        method: METHODS.POST,
        headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
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
            setLocalStorage(LOCATION, result.country)
            store.dispatch(weatherAction(result))
            store.dispatch(isLoadingWeatherForOneDay(
                {
                    'isLoadingWeatherForOneDay': false,
                }))
        })
        .catch((err) => {
            console.error('Could not fetch ' + err)
        })
}
