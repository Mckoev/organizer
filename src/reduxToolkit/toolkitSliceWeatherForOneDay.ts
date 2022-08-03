import { createSlice } from '@reduxjs/toolkit'

const toolkitSliceWeatherForOneDay = createSlice({
  name: 'weather',
  initialState: {
    location: 'Moscow',
    country: 'Russia',
    temp: ' ',
    condition: ' ',
    icon_url: ' ',
    date: '',
    maxWind: '',
    windDirection: '',
    humidity: '',
  },
  reducers: {
    weatherAction(state, action) {
      console.log(action)

      state.location = action.payload.location
      state.country = action.payload.country
      state.temp = action.payload.temp_c
      state.condition = action.payload.condition
      state.icon_url = action.payload.icon_url
      state.date = action.payload.local_time
      state.maxWind = action.payload.wind_kph
      state.windDirection = action.payload.wind_direction
      state.humidity = action.payload.humidity
    },
  },
})

export default toolkitSliceWeatherForOneDay.reducer

export const { weatherAction } = toolkitSliceWeatherForOneDay.actions
