import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cancelBooking, searchBookings } from "../Services/MovieBookingService";

export const searchMovieBookings = createAsyncThunk(
  "movie/searchMovieBookings",
  async (criteria) => {
    return await searchBookings(criteria);
  }
);

export const cancelMovieBooking = createAsyncThunk(
  "movie/cancelMovieBooking",
  async (id) => {
    return await cancelBooking(id);
  }
);

export const manageMovieBookingsSlicer = createSlice({
  name: "movie",
  initialState: {
    results: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [searchMovieBookings.pending]: () => {
      return { results: [], loading: true, error: false };
    },
    [searchMovieBookings.fulfilled]: (state, { payload }) => {
      return { results: payload, loading: false, error: false };
    },
    [searchMovieBookings.rejected]: () => {
      return { results: [], loading: false, error: true };
    },
    [cancelMovieBooking.pending]: () => {
      console.log("Pending");
    },
    [cancelMovieBooking.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
    },
    [cancelMovieBooking.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const movieBookingsReducer = manageMovieBookingsSlicer.reducer;
