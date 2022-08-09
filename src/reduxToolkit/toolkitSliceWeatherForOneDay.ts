import { createSlice } from '@reduxjs/toolkit'
import {CITY, LATITUDE, LOCATION, LONGITUDE} from "../api/weather/weatherApiData";

const toolkitSliceWeatherForOneDay = createSlice({
  name: 'weather',
  initialState: {
    location: localStorage.getItem(CITY),
    country: localStorage.getItem(LOCATION),
    temp: ' ',
    condition: ' ',
    icon_url: ' ',
    date: '',
    maxWind: '',
    windDirection: '',
    humidity: '',
    latitude: localStorage.getItem(LATITUDE),
    longitude: localStorage.getItem(LONGITUDE),
  },
  reducers: {
    weatherAction(state, action) {
      state.location = action.payload.location
      state.country = action.payload.country
      state.temp = action.payload.temp_c
      state.condition = action.payload.condition
      state.icon_url = action.payload.icon_url
      state.date = action.payload.local_time
      state.maxWind = action.payload.wind_kph
      state.windDirection = action.payload.wind_direction
      state.humidity = action.payload.humidity
      state.latitude = action.payload.latitude
      state.longitude = action.payload.longitude
    },
  },
})

export default toolkitSliceWeatherForOneDay.reducer

export const { weatherAction } = toolkitSliceWeatherForOneDay.actions
