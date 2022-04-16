import { Grid } from '@material-ui/core';
import React from 'react';
import MovieCard from './MovieCard';
export const MoviesList = ({movies}) => {
    return (
        <Grid container alignItems="flex-start" justify="flex-start" direction="row" spacing={2}>
            {
                         movies.map(movie => {
                            return <Grid item><MovieCard {...movie}/></Grid>
                        })
                    }
        </Grid>
    )
}