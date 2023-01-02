import { createSlice } from '@reduxjs/toolkit';

export interface HeaderSliceState {
    [x: string]: any;
    current_url: string
}

const initialState: HeaderSliceState = { current_url: '/recommend' }

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeUrl: (state, action) => {
            return { ...state, current_url: action.payload.current_url }
        }
    }
})


export default headerSlice.reducer;
export const { actions } = headerSlice