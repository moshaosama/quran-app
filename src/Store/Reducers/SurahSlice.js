import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


export const fetchSurah  = createAsyncThunk("surahSlice/fetchSurah" , async () => {
    const res = await fetch("https://api.quran.com/api/v4/chapters");

    const data = await res.json();
    return data;
})


const surahSlice = createSlice({
    name: 'surahSlice',
    initialState: [],

    reducers:{

    },

    extraReducers:(Builder) => {
        Builder.addCase(fetchSurah.fulfilled ,(state ,action) => {
            return action.payload;
        })
    }
})

export default surahSlice.reducer;