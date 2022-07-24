import React from "react";
import MovieCard from "./MovieCard";
export const MoviesList = ({ movies }) => {
  return (
    <div>
      <div className="grid place-content-center grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => {
          return <MovieCard {...movie} />;
        })}
      </div>
    </div>
  );
};
