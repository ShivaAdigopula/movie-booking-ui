import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchMoviesAsync } from "../Services/MovieSearchService";

export const searchMovies = createAsyncThunk("movie/searchMovies", async (query) => {
    return await searchMoviesAsync(query);
});

export const searchMoviesSlicer = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
    },
    extraReducers: {
        [searchMovies.pending]: () => {
            console.log("Pending");
        },
        [searchMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return [...payload.splice(0,10)];
        },
        [searchMovies.rejected]: () => {
            console.log("Rejected!");
        }
    },
})

export const searchMoviesReducer =  searchMoviesSlicer.reducer;