import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovieDetails } from "../Services/MovieSearchService";

export const fetchMovieDetails = createAsyncThunk("movie/fetchMovieDetails", async (id) => {
    return await getMovieDetails(id);
});

export const movieDetailsSlicer = createSlice({
    name: 'movie',
    initialState: {},
    reducers: {
    },
    extraReducers: {
        [fetchMovieDetails.pending]: () => {
            console.log("Pending");
        },
        [fetchMovieDetails.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return payload;
        },
        [fetchMovieDetails.rejected]: () => {
            console.log("Rejected!");
        }
    },
})

export const movieDetailsReducer =  movieDetailsSlicer.reducer;