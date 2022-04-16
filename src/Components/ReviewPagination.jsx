
import { Card, Grid, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieReviews } from '../Slices/MovieReviewsSlicer';
import { MovieReviewList } from './ReviewList';

export const ReviewPagination = ({ movie_id }) => {
    const reviewsResponse = useSelector(state => state.reviews);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const handlePageClick = (event, value) => {
        // console.log({'selected': event.selected})
        dispatch(fetchMovieReviews({ id: movie_id, page: value }));
        setPage(value);
    }

    useEffect(() => {
        dispatch(fetchMovieReviews({ id: movie_id, page: 1 }));
    }, [movie_id, dispatch])

    return <>
        <Card className="movie-review">
        <Grid container alignItems="flex-start" justify="flex-start" direction="column">
            <Grid item>
                <Typography variant="h5">Reviews</Typography>
            </Grid>
            <Grid item>
                <MovieReviewList reviews={reviewsResponse.results} />
                {<Pagination count={reviewsResponse.total_pages} color="primary" page={page} onChange={handlePageClick} />
                }
            </Grid>
        </Grid>
        </Card>




    </>
}