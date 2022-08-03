import { combineReducers, configureStore } from '@reduxjs/toolkit'
import toolkitSlice from './toolkitSlice'
import toolkitSliceDays from './toolkitSliceDays'

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
  toolkitSliceDays: toolkitSliceDays,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
