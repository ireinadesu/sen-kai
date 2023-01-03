import { createSlice } from "@reduxjs/toolkit";

export interface historySliceState { readonly id: string, title: string }

const initialState: historySliceState[] = [
    { id: '1', title: '魔女之旅' },
    { id: '2', title: '虫师' },
    { id: '3', title: '影之宅' }
]

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        insert: (state, action) => {
            return [...state, { id: '4', title: '想要成为影之实力者' }]
        },
        delete: (state, action) => {
            const newState: historySliceState[] = []
            state.map((history) => {
                if (history.id !== action.payload.id) {
                    newState.push({ id: history.id, title: history.title })
                }
                return history
            })
            return newState
        }
    },
})

export default historySlice.reducer;
export const { actions } = historySlice