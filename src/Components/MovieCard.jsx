import * as React from 'react';


import { useDispatch } from 'react-redux';
import { fetchMovieDetails } from '../Slices/MovieDetailsSlicer';
import { useNavigate } from 'react-router';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

export default function MovieCard({ id, poster_path, title, vote_average, release_date }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickHandler = () => {
    dispatch(fetchMovieDetails(id));
    navigate('/movie-details');

  }
  return (
    <Card sx={{ width: 245, height: 275 }}
     key={id} onClick={onClickHandler} className="movie-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="200"
          image={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
        <CardContent>
          <Grid container>
            <Grid item>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </Grid>
            <Grid item container alignItems="flex-start" justify="space-between" direction="row">
              <Grid item>
                <Typography variant="body2" color="text.secondary">

                  <div>Release Date: {release_date}</div>

                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">


                  <div>Rating: {vote_average}</div>

                </Typography>
              </Grid>


            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}