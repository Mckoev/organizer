import { createSlice } from '@reduxjs/toolkit'

const toolkitSliceIsLoading = createSlice({
  name: 'isLoading',
  initialState: {
    isLoading: true,
  },
  reducers: {
    isLoadingAction(state, action) {
      console.log(action)

      state.isLoading = action.payload.isLoading
    },
  },
})

export default toolkitSliceIsLoading.reducer

export const { isLoadingAction } = toolkitSliceIsLoading.actions
