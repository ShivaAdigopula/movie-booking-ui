import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cancelBooking, searchBookings } from "../Services/MovieBookingService";

export const searchMovieBookings = createAsyncThunk("movie/searchMovieBookings", async (criteria) => {
    return await searchBookings(criteria);
});

export const cancelMovieBooking = createAsyncThunk("movie/cancelMovieBooking", async (id) => {
    return await cancelBooking(id);
});

export const manageMovieBookingsSlicer = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
    },
    extraReducers: {
        [searchMovieBookings.pending]: () => {
            console.log("Pending");
        },
        [searchMovieBookings.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return payload;
        },
        [searchMovieBookings.rejected]: () => {
            console.log("Rejected!");
        },
        [cancelMovieBooking.pending]: () => {
            console.log("Pending");
        },
        [cancelMovieBooking.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            // return payload;
        },
        [cancelMovieBooking.rejected]: () => {
            console.log("Rejected!");
        }
    },
})

export const movieBookingsReducer =  manageMovieBookingsSlicer.reducer;