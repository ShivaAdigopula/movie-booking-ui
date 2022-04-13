import { configureStore } from "@reduxjs/toolkit";
import { featuredMovieReducer } from "./Slices/FeaturedMovieSlicer";
import { movieDetailsReducer } from "./Slices/MovieDetailsSlicer";

export const store = configureStore({
    reducer: {
        featuredMovies: featuredMovieReducer,
        movieDetails: movieDetailsReducer,
    }
})