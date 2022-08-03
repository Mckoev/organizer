import { createSlice } from '@reduxjs/toolkit'

const toolkitSliceIsLoading = createSlice({
  name: 'isLoading',
  initialState: {
    isLoading: true,
  },
  reducers: {
    weatherAction(state, action) {
      state.isLoading = action.payload.isLoading
    },
  },
})

export default toolkitSliceIsLoading.reducer

export const { weatherAction } = toolkitSliceIsLoading.actions
