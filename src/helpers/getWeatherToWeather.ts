import {URL_WEATHER, TOKEN, METHODS} from "./API";
import {store} from "../reduxToolkit/store";
import {conditionAction, countryAction, iconAction, locationAction, tempAction} from "../reduxToolkit/toolkitSlice";


export function  getWeatherToWeather(location: string): void{
    if (!location) {
        location = 'Moscow'
    }
    const responce = fetch(URL_WEATHER, {
        method: METHODS.POST,
        headers: {
            'Content-Type': `application/json`,
            'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            "days": 7,
            "location": location
        })
    })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            store.dispatch(locationAction(result.location))
            store.dispatch(countryAction(result.country))
        })
}










