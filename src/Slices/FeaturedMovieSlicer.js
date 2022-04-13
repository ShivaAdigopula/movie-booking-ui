import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFeaturedMovies } from "../Services/MovieSearchService";

export const fetchFeaturedMovies = createAsyncThunk("movie/fetchFeaturedMovies", async () => {
    return await getFeaturedMovies();
});

export const featuredMovieSlicer = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
    },
    extraReducers: {
        [fetchFeaturedMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchFeaturedMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return [...payload.splice(0,10)];
        },
        [fetchFeaturedMovies.rejected]: () => {
            console.log("Rejected!");
        }
    },
})

export const featuredMovieReducer =  featuredMovieSlicer.reducer;