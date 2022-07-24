import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFeaturedMovies } from "../Services/MovieSearchService";

export const fetchFeaturedMovies = createAsyncThunk(
  "movie/fetchFeaturedMovies",
  async () => {
    return await getFeaturedMovies();
  }
);

export const featuredMovieSlicer = createSlice({
  name: "movie",
  initialState: {
    results: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchFeaturedMovies.pending]: () => {
      return { loading: true };
    },
    [fetchFeaturedMovies.fulfilled]: (state, { payload }) => {
      return {
        results: [...payload.splice(0, 10)],
        loading: false,
        error: false,
      };
    },
    [fetchFeaturedMovies.rejected]: () => {
      return {
        loading: false,
        error: true,
      };
    },
  },
});

export const featuredMovieReducer = featuredMovieSlicer.reducer;
