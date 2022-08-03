import { combineReducers, configureStore } from '@reduxjs/toolkit'
import toolkitSliceWeatherForOneDay from './toolkitSliceWeatherForOneDay'
import toolkitSliceWeatherForManyDays from './toolkitSliceWeatherForManyDays'
import toolkitSliceIsLoading from './toolkitSliceIsLoading'

const rootReducer = combineReducers({
  toolkitSliceWeatherForOneDay: toolkitSliceWeatherForOneDay,
  toolkitSliceWeatherForManyDays: toolkitSliceWeatherForManyDays,
  toolkitSliceIsLoading: toolkitSliceIsLoading,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
