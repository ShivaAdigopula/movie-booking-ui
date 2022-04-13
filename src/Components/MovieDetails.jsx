import React from 'react';
import { useSelector } from 'react-redux';

export const MovieDetails = () => {
    const movieDetails = useSelector(state =>  state.movieDetails);
    return <>
      {JSON.stringify(movieDetails)}
    </>
}