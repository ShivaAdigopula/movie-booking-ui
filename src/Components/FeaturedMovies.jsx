import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedMovies } from '../Slices/FeaturedMovieSlicer';
import { MoviesList } from './MoviesList';

export const FeaturedMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.featuredMovies);
    useEffect(() => {
        dispatch(fetchFeaturedMovies())
    }, [])

    return <div className="container">
            
            <h2>Featured Movies</h2>
            
            {movies && <MoviesList movies={movies}/> }
    </div>
}