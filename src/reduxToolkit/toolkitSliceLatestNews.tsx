import { createSlice } from '@reduxjs/toolkit'

const init = {
    creator: '',
    title: '',
    description: '',
    date: '',
    source_id: '',
    image_url: '',
    link: ''
}

const toolkitSliceLatestNews = createSlice({
    name: 'latestNews',
    initialState: {
        arrNews: [init],
    },
    reducers: {
        newsAction(state, action) {
            for (let i = 0; i < action.payload.length; i++) {
                state.arrNews.push(action.payload[i])
            }
        },
    },
})

export default toolkitSliceLatestNews.reducer
export const { newsAction} = toolkitSliceLatestNews.actions