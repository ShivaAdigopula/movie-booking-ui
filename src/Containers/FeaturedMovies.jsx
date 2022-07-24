import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedMovies } from "../Slices/FeaturedMovieSlicer";
import { MoviesList } from "../Components/MoviesList";
import { Alert } from "@material-ui/lab";

export const FeaturedMovies = () => {
  const dispatch = useDispatch();
  const {
    results = [],
    loading,
    error,
  } = useSelector((state) => state.featuredMovies);
  useEffect(() => {
    dispatch(fetchFeaturedMovies());
  }, [dispatch]);

  if (error) {
    return <Alert severity="error">Something went wrong ...!!</Alert>;
  }

  return (
    <>
      {loading && <div>Loading ...</div>}
      {results && !loading && <MoviesList movies={results} />}
    </>
  );
};
