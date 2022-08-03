import { URL_HOME, TOKEN, METHODS } from './API'
import { store } from '../reduxToolkit/store'
import { weatherAction } from '../reduxToolkit/toolkitSliceWeatherForOneDay'

export function getWeatherForOneDay(location: string): void {
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
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not fetch ${URL_HOME}, received ${response.status}`)
      }
      return response.json()
    })
    .then((result) => {
      console.log(result)
      store.dispatch(weatherAction(result))
    })
      .catch((err) => {
        console.error('Could not fetch ' +  err)
      })
}
