import { createSlice } from '@reduxjs/toolkit'

const toolkitSlice = createSlice({
  name: 'weather',
  initialState: {
    location: 'Petrozavodsk',
    country: 'Russia',
    temp: ' ',
    condition: ' ',
    icon: ' ',
    date: '',
    maxWind: '',
    windDirection: '',
    humidity: '',
  },
  reducers: {
    weatherAction(state, action) {
      state.location = action.payload.location
      state.country = action.payload.country
      state.temp = action.payload.temp_c
      state.condition = action.payload.condition
      state.icon = action.payload.icon_url
      state.date = action.payload.local_time
      state.maxWind = action.payload.wind_kph
      state.windDirection = action.payload.wind_direction
      state.humidity = action.payload.humidity
    },  
  },
})

export default toolkitSlice.reducer
export const { weatherAction } = toolkitSlice.actions
