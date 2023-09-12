import {configureStore} from '@reduxjs/toolkit'
import surahReducer from './Reducers/SurahSlice'
export const store =  configureStore({
    reducer: {
        Surah:surahReducer,
    }
})