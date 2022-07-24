import { Button, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ReviewPagination } from "../Components/ReviewPagination";
import _ from "lodash";
import { fetchMovieDetails } from "../Slices/MovieDetailsSlicer";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const movieDetails = useSelector((state) => state.movieDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movieId } = useParams();

  useEffect(() => {
    console.log({ movieId });
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  const onBookingHandler = (id) => {
    navigate(`/movie-booking/${id}`);
  };
  return (
    <>
      {!_.isEmpty(movieDetails) && (
        <div className="flex flex-col lg:flex-row justify-center gap-5 m-5 bg-white p-5 rounded-sm">
          <div>
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </div>
          <div className="flex flex-col justify-start gap-5">
            <Typography variant="h4"> {movieDetails.title}</Typography>
            <Typography variant="body1">
              <b>Run time </b> {movieDetails.runtime} mins
            </Typography>
            <Typography variant="body1">
              <b>Release Date</b> {movieDetails.release_date}
            </Typography>
            <Typography variant="body1">
              <b>Genre</b>{" "}
              {movieDetails.genres &&
                movieDetails.genres.map((genre) => genre.name).join(",")}
            </Typography>
            <Rating
              name="read-only"
              value={movieDetails.vote_average / 2}
              readOnly
            />
            <Typography variant="body2">{movieDetails.overview}</Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={() => onBookingHandler(movieDetails.id)}
            >
              {" "}
              Book the tickets{" "}
            </Button>
          </div>
        </div>
      )}
      {!_.isEmpty(movieDetails) && (
        <ReviewPagination movie_id={movieDetails.id}></ReviewPagination>
      )}
    </>
  );
};
