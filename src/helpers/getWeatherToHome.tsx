import { URL_HOME, TOKEN, METHODS } from './API'
import { store } from '../reduxToolkit/store'
import { weatherAction } from '../reduxToolkit/toolkitSlice'

export function getWeatherToHome(location: string): void {
  if (!location) {
    location = 'Moscow'
  }
  const responce = fetch(URL_HOME, {
    method: METHODS.POST,
    headers: {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      location: location,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      store.dispatch(weatherAction(result))
    })
}
