import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieReviews } from "../Slices/MovieReviewsSlicer";
import { MovieReviewList } from "./ReviewList";

export const ReviewPagination = ({ movie_id }) => {
  const reviewsResponse = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handlePageClick = (event, value) => {
    dispatch(fetchMovieReviews({ id: movie_id, page: value }));
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchMovieReviews({ id: movie_id, page: 1 }));
  }, [movie_id, dispatch]);

  return (
    <>
      <div className="flex flex-col justify-center gap-5 m-5 bg-white p-5 rounded-sm">
        <div className="flex flex-row justify-start items-start px-2">
          <Typography variant="h5">Reviews</Typography>
        </div>

        <div>
          <MovieReviewList reviews={reviewsResponse.results} />
          {
            <Pagination
              count={reviewsResponse.total_pages}
              color="primary"
              page={page}
              onChange={handlePageClick}
            />
          }
        </div>
      </div>
    </>
  );
};
