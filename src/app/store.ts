import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import headerReducer from '@/features/header/headerSlice'


const rootReducer = combineReducers({
    headerReducer
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore(
    { reducer: rootReducer }
)