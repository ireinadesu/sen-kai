import { createSlice } from '@reduxjs/toolkit';

const initialState: HeaderSliceState = { current_url: '/' }

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeUrlToRecommend: (state, action) => {
            console.log("changeUrlToRecommend");

            state.current_url = action.payload.current_url
        }
    }
})

export type HeaderSliceState = {
    [x: string]: any;
    current_url: string
}

export const { changeUrlToRecommend } = headerSlice.actions

export default headerSlice.reducer;