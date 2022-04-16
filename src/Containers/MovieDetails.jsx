
import { Button, Card, CardMedia, Grid, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ReviewPagination } from '../Components/ReviewPagination';

export const MovieDetails = () => {
  const movieDetails = useSelector(state => state.movieDetails);
  const navigate = useNavigate();

  const onBookingHandler = () => {
    navigate("/movie-booking");
  }
  return <>
    {
      movieDetails && <Card>
        <Grid container alignItems="flex-start" justify="flex-start" direction="row" spacing={2}>
          <Grid item xs={12}  sm={6}lg={6}>
          <CardMedia
              component="img"
              height="500"            
              image={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <Grid container  alignItems="flex-start" justify="flex-start" direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4"> {movieDetails.title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1"><b>Run time </b> {movieDetails.runtime} mins</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1"><b>Release Date</b> {movieDetails.release_date}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1"><b>Genre</b>  {movieDetails.genres && movieDetails.genres.map(genre => genre.name).join(",")}</Typography>
            </Grid>
            <Grid item>
              <Rating name="read-only" value={movieDetails.vote_average / 2} readOnly />
            </Grid>
            <Grid item>
              {movieDetails.overview}
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained"
                onClick={onBookingHandler}> Book the tickets </Button>
            </Grid>
            </Grid>
            
          </Grid>


        </Grid>
      </Card>
      

    }
    {movieDetails && <ReviewPagination movie_id={movieDetails.id}></ReviewPagination>}
  </>
}