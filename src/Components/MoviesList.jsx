import { Grid } from '@material-ui/core';
import React from 'react';
import MovieCard from './MovieCard';
export const MoviesList = ({movies}) => {
    return (
        <Grid container   spacing={1}>
            {
                         movies.map(movie => {
                            return <Grid item><MovieCard {...movie}/></Grid>
                        })
                    }
        </Grid>
    )
}