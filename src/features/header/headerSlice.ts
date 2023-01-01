import { createSlice } from '@reduxjs/toolkit';

type SliceState = { current_url: string }

const initialState: SliceState = { current_url: '/' }

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeUrlToRecommend: (state, action) => {
            console.log("changeUrlToRecommend");

            state.current_url = '/recommend'
        }
    }
})

export const { changeUrlToRecommend } = headerSlice.actions

export default headerSlice.reducer;