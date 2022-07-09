import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedMovies } from '../Slices/FeaturedMovieSlicer';
import { MoviesList } from '../Components/MoviesList';
import { Grid, Typography } from '@material-ui/core';

export const FeaturedMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.featuredMovies);
    useEffect(() => {
        dispatch(fetchFeaturedMovies())
    }, [dispatch])

    return <Grid container>
            <Grid item >
            <Typography variant="h4" >Featured Movies</Typography>
            </Grid>
            <Grid item>
                {movies && <MoviesList movies={movies}/> }
            </Grid>
    </Grid>

}