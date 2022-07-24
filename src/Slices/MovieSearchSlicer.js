import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchMoviesAsync } from "../Services/MovieSearchService";

export const searchMovies = createAsyncThunk(
  "movie/searchMovies",
  async (query) => {
    return await searchMoviesAsync(query);
  }
);

function filterForMoviesWithBackdrop(payload) {
  return payload.filter((mv) => mv.backdrop_path != null);
}

export const searchMoviesSlicer = createSlice({
  name: "movie",
  initialState: {
    results: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [searchMovies.pending]: () => {
      return { results: [], loading: true, error: false };
    },
    [searchMovies.fulfilled]: (state, { payload }) => {
      return {
        results: filterForMoviesWithBackdrop([...payload.splice(0, 10)]),
        loading: false,
        error: false,
      };
    },
    [searchMovies.rejected]: () => {
      return { results: [], loading: false, error: true };
    },
  },
});

export const searchMoviesReducer = searchMoviesSlicer.reducer;
