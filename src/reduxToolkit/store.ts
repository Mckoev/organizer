import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherForOneDay from './slices/weatherForOneDay';
import weatherForManyDays from './slices/weatherForManyDays';
import latestNews from './slices/latestNews';
import isLoading from './slices/isLoading';

const rootReducer = combineReducers({
    weatherForOneDay,
    weatherForManyDays,
    isLoading,
    latestNews,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
