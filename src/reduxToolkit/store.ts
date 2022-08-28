import { combineReducers, configureStore } from '@reduxjs/toolkit'
import weatherForOneDay from './slices/weatherForOneDay'
import weatherForManyDays from './slices/weatherForManyDays'
import latestNews from "./slices/latestNews";
import isLoading from "./slices/isLoading";

const rootReducer = combineReducers({
  weatherForOneDay: weatherForOneDay,
  weatherForManyDays: weatherForManyDays,
  isLoading: isLoading,
  latestNews: latestNews
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
