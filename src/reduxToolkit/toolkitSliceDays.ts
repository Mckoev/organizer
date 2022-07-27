import { createSlice } from '@reduxjs/toolkit'

const init = {
  date: '',
  maxTemp: '',
  minTemp: '',
  icon: '',
}

const toolkitSliceDays = createSlice({
  name: 'day',
  initialState: {
    arrState: [init, init, init, init, init, init, init],
  },
  reducers: {
    daysAction(state, action) {
      for (let i = 0; i < action.payload.forecast.length; i++) {
        state.arrState[i].date = action.payload.forecast[i].date
        state.arrState[i].maxTemp = action.payload.forecast[i].max_temp_c
        state.arrState[i].minTemp = action.payload.forecast[i].min_temp_c
        state.arrState[i].icon = action.payload.forecast[i].icon_url
      }
    },
  },
})

export default toolkitSliceDays.reducer
export const { daysAction } = toolkitSliceDays.actions
