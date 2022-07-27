import {createSlice} from "@reduxjs/toolkit";

const toolkitSliceDay0 = createSlice({
    name: 'day0',
    initialState: {
        date: '',
        maxTemp: '',
        minTemp: '',
        icon: '',
        maxWind: '',
        windDirection: '',
        humidity: '',

    },
    reducers: {
        dateAction(state, action) {
            state.date = action.payload
        },
        maxTempAction(state, action) {
            state.maxTemp = action.payload
        },
        minTempAction(state, action) {
            state.minTemp = action.payload
        },
        iconAction(state, action) {
            state.icon = action.payload
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

export default toolkitSliceDay0.reducer
export const {dateAction, maxTempAction, minTempAction, iconAction, maxWindAction, windDirectionAction, humidityAction} = toolkitSliceDay0.actions