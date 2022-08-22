import { createSlice } from '@reduxjs/toolkit'

const toolkitSliceIsLoading = createSlice({
  name: 'isLoading',
  initialState: {
    isLoadingWeatherForOneDay: true,
    isLoadingWeatherForManyDays: true,
    isLoadingLatestNews: true
  },
  reducers: {
    isLoadingWeatherForOneDay(state, action) {
      state.isLoadingWeatherForOneDay = action.payload.isLoadingWeatherForOneDay
    },
    isLoadingWeatherForManyDays(state, action) {
      state.isLoadingWeatherForManyDays = action.payload.isLoadingWeatherForManyDays
    },
    isLoadingLatestNews(state, action) {
      state.isLoadingLatestNews = action.payload.isLoadingLatestNews
    },
  },
})

export default toolkitSliceIsLoading.reducer

export const { isLoadingWeatherForOneDay ,isLoadingWeatherForManyDays, isLoadingLatestNews } = toolkitSliceIsLoading.actions
