import { createSlice } from '@reduxjs/toolkit'

const toolkitSliceIsLoading = createSlice({
  name: 'isLoading',
  initialState: {
    isLoadingWeatherForOneDay: true,
    isLoadingWeatherForManyDays: true,
  },
  reducers: {
    isLoadingWeatherForOneDay(state, action) {
      state.isLoadingWeatherForOneDay = action.payload.isLoadingWeatherForOneDay
    },
    isLoadingWeatherForManyDays(state, action) {
      state.isLoadingWeatherForManyDays = action.payload.isLoadingWeatherForManyDays
    },
  },
})

export default toolkitSliceIsLoading.reducer

export const { isLoadingWeatherForOneDay ,isLoadingWeatherForManyDays } = toolkitSliceIsLoading.actions
