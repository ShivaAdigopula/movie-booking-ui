import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { MoviesList } from './MoviesList';

export const SearchedMovies = () => {

    const movies = useSelector(state => state.searchResults);

    return <Grid container>
        <Typography variant="h4" >Search Results</Typography>
        <Grid item>
            {movies && <MoviesList movies={movies} />}
        </Grid>
    </Grid>
}