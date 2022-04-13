import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchMovieDetails } from '../Slices/MovieDetailsSlicer';
import { useNavigate } from 'react-router';

export default function MovieCard({id, poster_path, title, vote_average, release_date}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickHandler = () => {
      dispatch(fetchMovieDetails(id));
      navigate('/movie-details');

  }
  return (
    <Card sx={{ width: 245, height:275  }} key={id} onClick={onClickHandler}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="200"
          image={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <div className="container"> 
           <div>Release Date: {release_date}</div>
            <div>Rating: {vote_average}</div>
           </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}