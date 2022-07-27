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

    // locationAction(state, action) {
    //     state.location = action.payload
    // },
    // countryAction(state, action) {
    //     state.country = action.payload
    // },
    // tempAction(state, action) {
    //     state.temp = action.payload
    // },
    // conditionAction(state, action) {
    //     state.condition = action.payload
    // },
    // iconAction(state, action) {
    //     state.icon = action.payload
    // },
    // dateAction(state, action) {
    //     state.date = action.payload
    // },
    // maxTempAction(state, action) {
    //     state.maxTemp = action.payload
    // },
    // minTempAction(state, action) {
    //     state.minTemp = action.payload
    // },
    // maxWindAction(state, action) {
    //     state.maxWind = action.payload
    // },
    // windDirectionAction(state, action) {
    //     state.windDirection = action.payload
    // },
    // humidityAction(state, action) {
    //     state.humidity = action.payload
    // },
  },
})

export default toolkitSlice.reducer
// export const { locationAction, countryAction, tempAction, conditionAction, iconAction, dateAction, maxTempAction, minTempAction, maxWindAction, windDirectionAction, humidityAction } = toolkitSlice.actions

export const { weatherAction } = toolkitSlice.actions
