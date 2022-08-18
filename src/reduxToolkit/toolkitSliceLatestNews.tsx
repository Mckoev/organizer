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
            // for (let i = 0; i < action.payload.length; i++) {
            //     state.arrNews[i].creator = action.payload[i].creator ? action.payload[i].creator[0] : 'Автор неизвестен'
            //     state.arrNews[i].title = action.payload[i].title
            //     state.arrNews[i].description = action.payload[i].description
            //     state.arrNews[i].date = action.payload[i].pubDate
            //     state.arrNews[i].source_id = action.payload[i].source_id
            //     state.arrNews[i].image_url = action.payload[i].image_url ? action.payload[i].image_url : '/'
            //     state.arrNews[i].link = action.payload[i].link
            // }
        },
    },
})

export default toolkitSliceLatestNews.reducer
export const { newsAction} = toolkitSliceLatestNews.actions