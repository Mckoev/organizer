import { createSlice } from '@reduxjs/toolkit'

const DOWNLOADING = 'downloading...'
const toolkitSlice = createSlice({
    name: 'weather',
    initialState: {
        location: DOWNLOADING,
        country: ' ',
        temp: ' ',
        condition: ' ',
        icon: ' ',
    },
    reducers: {
        location(state, action) {
            state.location = action.payload
        },
        country(state, action) {
            state.country = action.payload
        },
        temp(state, action) {
            state.temp = action.payload
        },
        condition(state, action) {
            state.condition = action.payload
        },
        icon(state, action) {
            state.icon = action.payload
        },
    },
})

export default toolkitSlice.reducer
export const { location, country, temp, condition, icon } = toolkitSlice.actions