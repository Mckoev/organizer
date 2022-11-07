import { createSlice } from '@reduxjs/toolkit';

const isLoading = createSlice({
    name: 'isLoading',
    initialState: {
        isLoadingWeatherForOneDay: true,
        isLoadingWeatherForManyDays: true,
        isLoadingLatestNews: true,
        isErrorApiForOneDay: false,
        isErrorApiForManyDays: false,
        isErrorApiLatestNews: false,
    },
    reducers: {
        isLoadingWeatherForOneDay(state, action) {
            state.isLoadingWeatherForOneDay = action.payload.isLoadingWeatherForOneDay;
        },
        isLoadingWeatherForManyDays(state, action) {
            state.isLoadingWeatherForManyDays = action.payload.isLoadingWeatherForManyDays;
        },
        isLoadingLatestNews(state, action) {
            state.isLoadingLatestNews = action.payload.isLoadingLatestNews;
        },
        isErrorApiForOneDay(state, action) {
            state.isErrorApiForOneDay = action.payload.isErrorApiForOneDay;
        },
        isErrorApiForManyDays(state, action) {
            state.isErrorApiForManyDays = action.payload.isErrorApiForManyDays;
        },
        isErrorApiLatestNews(state, action) {
            state.isErrorApiLatestNews = action.payload.isErrorApiLatestNews;
        }
    },
});

export default isLoading.reducer;

export const { isLoadingWeatherForOneDay, isLoadingWeatherForManyDays, isLoadingLatestNews, isErrorApiForOneDay, isErrorApiForManyDays, isErrorApiLatestNews } = isLoading.actions;
