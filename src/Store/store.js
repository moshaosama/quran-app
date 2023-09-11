import {configureStore} from '@reduxjs/toolkit'
import surahReducer from './Reducers/SurahSlice'
import playReducer from './Reducers/playSlice';

export const store =  configureStore({
    reducer: {
        Surah:surahReducer,
        Play:playReducer,
    }
})