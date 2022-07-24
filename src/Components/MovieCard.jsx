import * as React from "react";

import { useNavigate } from "react-router";
import { Typography } from "@material-ui/core";
import {
  FiCard,
  FiCardActionArea,
  FiCardContent,
  FiCardMedia,
} from "./FullImageCard";
import moment from "moment";

export default function MovieCard({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    // dispatch(fetchMovieDetails(id));
    navigate(`/movie-details/${id}`);
  };
  return (
    <FiCard key={id} onClick={onClickHandler} className="movie-card">
      <FiCardActionArea>
        <FiCardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
        <FiCardContent>
          <div className="flex justify-between">
            <div className="text-left">
              <Typography variant="body2" color="text.secondary">
                <div>Release Year: {moment(release_date).format("yyyy")}</div>
              </Typography>
            </div>
            <div className="text-right">
              <Typography variant="body2" color="text.secondary">
                <div>Rating: {vote_average}</div>
              </Typography>
            </div>
          </div>
        </FiCardContent>
      </FiCardActionArea>
    </FiCard>
  );
}
