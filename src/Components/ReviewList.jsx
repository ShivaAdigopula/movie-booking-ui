import React from "react";
import { MovieReview } from "./MovieReview";
export const MovieReviewList = ({ reviews = [] }) => {
  return (
    <div>{reviews && reviews.map((review) => <MovieReview {...review} />)}</div>
  );
};
