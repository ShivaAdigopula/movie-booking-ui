import { configureStore } from "@reduxjs/toolkit";
import { featuredMovieReducer } from "./Slices/FeaturedMovieSlicer";
import { doMovieBookingReducer } from "./Slices/MovieBookingSlicer";
import { movieDetailsReducer } from "./Slices/MovieDetailsSlicer";
import { movieReviewsReducer } from "./Slices/MovieReviewsSlicer";
import { searchMoviesReducer } from "./Slices/MovieSearchSlicer";
import { movieBookingsReducer } from "./Slices/ManageMovieBookingsSlicer";

export const store = configureStore({
  reducer: {
    featuredMovies: featuredMovieReducer,
    movieDetails: movieDetailsReducer,
    reviews: movieReviewsReducer,
    searchResults: searchMoviesReducer,
    movieBooking: doMovieBookingReducer,
    bookings: movieBookingsReducer,
  },
});
