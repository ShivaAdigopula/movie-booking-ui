import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookMovie } from "../Services/MovieBookingService";

export const doMovieBooking = createAsyncThunk("movie/doMovieBooking", async (payload) => {
    return await bookMovie(payload);
});

export const doMovieBookingSlicer = createSlice({
    name: 'movie',
    initialState: {},
    reducers: {
    },
    extraReducers: {
        [doMovieBooking.pending]: () => {
            console.log("Pending");
        },
        [doMovieBooking.fulfilled]: (state, { payload }) => {
            console.log("Posted Successfully!");
            return payload;
        },
        [doMovieBooking.rejected]: () => {
            console.log("Rejected!");
        }
    },
})

export const doMovieBookingReducer =  doMovieBookingSlicer.reducer;