import { createSlice } from '@reduxjs/toolkit'

const DOWNLOADING = 'downloading...'
const toolkitSlice = createSlice({
    name: 'weather',
    initialState: {
        location: 'Petrozavodsk',
        country: 'Russia',
        temp: ' ',
        condition: ' ',
        icon: ' ',
        date: '',
        maxTemp: '',
        minTemp: '',
        maxWind: '',
        windDirection: '',
        humidity: '',
    },
    reducers: {
        locationAction(state, action) {
            state.location = action.payload
        },
        countryAction(state, action) {
            state.country = action.payload
        },
        tempAction(state, action) {
            state.temp = action.payload
        },
        conditionAction(state, action) {
            state.condition = action.payload
        },
        iconAction(state, action) {
            state.icon = action.payload
        },
        dateAction(state, action) {
            state.date = action.payload
        },
        maxTempAction(state, action) {
            state.maxTemp = action.payload
        },
        minTempAction(state, action) {
            state.minTemp = action.payload
        },
        maxWindAction(state, action) {
            state.maxWind = action.payload
        },
        windDirectionAction(state, action) {
            state.windDirection = action.payload
        },
        humidityAction(state, action) {
            state.humidity = action.payload
        },
    },
})

export default toolkitSlice.reducer
export const { locationAction, countryAction, tempAction, conditionAction, iconAction, dateAction, maxTempAction, minTempAction, maxWindAction, windDirectionAction, humidityAction } = toolkitSlice.actions