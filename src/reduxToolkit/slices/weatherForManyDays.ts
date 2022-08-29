import { createSlice } from '@reduxjs/toolkit'

const init = {
  date: '',
  maxTemp: '',
  minTemp: '',
  icon_url: '',
}

const weatherForManyDays = createSlice({
  name: 'day',
  initialState: {
    arrState: [init, init, init, init, init, init, init],
  },
  reducers: {
    daysAction(state, action) {
      for (let i = 0; i < action.payload.length; i++) {
        state.arrState[i].date = action.payload[i].date
        state.arrState[i].maxTemp = action.payload[i].max_temp_c
        state.arrState[i].minTemp = action.payload[i].min_temp_c
        state.arrState[i].icon_url = action.payload[i].icon_url
      }
    },
  },
})

export default weatherForManyDays.reducer
export const { daysAction } = weatherForManyDays.actions
