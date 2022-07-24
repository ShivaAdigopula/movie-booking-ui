import { Alert } from "@material-ui/lab";
import React from "react";
import { useSelector } from "react-redux";
import { MoviesList } from "./MoviesList";

export const SearchedMovies = () => {
  const {
    results = [],
    loading,
    error,
  } = useSelector((state) => state.searchResults);

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
