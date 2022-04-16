import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getMovieReviews } from "../Services/MovieSearchService";

export const fetchMovieReviews = createAsyncThunk("movie/fetchMovieReviews", async ({id, page}) => {
    console.log({page})
    return await getMovieReviews(id, page);
});

export const movieReviewsSlicer = createSlice({
    name: 'movie',
    initialState: {},
    reducers: {
    },
    extraReducers: {
        [fetchMovieReviews.pending]: () => {
            console.log("Pending");
        },
        [fetchMovieReviews.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return payload;
        },
        [fetchMovieReviews.rejected]: () => {
            console.log("Rejected!");
        }
    },
})

export const movieReviewsReducer =  movieReviewsSlicer.reducer;