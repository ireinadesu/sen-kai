import { createSlice } from "@reduxjs/toolkit";

export interface SearchSliceState { readonly id: string, title: string }

const initialState: SearchSliceState[] = [
    { id: '1', title: '魔女之旅' },
    { id: '2', title: '虫师' },
    { id: '3', title: '影之宅' }
]
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        insert: (state, action) => {
            return [...state, { id: '4', title: '想要成为影之实力者' }]
        },
        delete: (state, action) => {
            const newState: SearchSliceState[] = []
            state.map((s) => {
                if (s.id !== action.payload.id) {
                    newState.push({ id: s.id, title: s.title })
                }
                return s
            })
            return newState
        }
    },
})

export default searchSlice.reducer;
export const { actions } = searchSlice