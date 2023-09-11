import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPlay = createAsyncThunk("playSlice/fetchPlay" , async() => {
    const res =await fetch("https://server7.mp3quran.net/basit/");
    const data = await res.json();
    return data;
})
const playSlice =createSlice({
    name: 'playSlice',
    initialState:[],

    reducers: {

    },

    extraReducers:(Builder) => {
        Builder.addCase(fetchPlay.fulfilled ,(state ,action) => {
            return action.payload;
        })
    }
})

export default playSlice.reducer;