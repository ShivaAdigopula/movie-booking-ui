import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieBookingList } from "../Components/MovieBookingList";
import { Search } from "../Components/Search";
import { searchMovieBookings } from "../Slices/ManageMovieBookingsSlicer";

export const ManageBookings = () => {
  const { results, loading, error } = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState(null);

  const onSearchSubmitHandler = () => {
    dispatch(searchMovieBookings({ key: searchText }));
  };

  useEffect(() => {
    dispatch(searchMovieBookings({}));
  }, [dispatch]);

  if (error) {
    return <Alert severity="error">Something went wrong ....!!</Alert>;
  }

  return (
    <>
      <Search
        onChangeValue={setSearchText}
        onSubmit={onSearchSubmitHandler}
        onEnter={onSearchSubmitHandler}
        placeholder={"Search Bookings...!"}
      />
      {loading && <div className="flex justify-center">Loading ....!</div>}
      {!loading && <MovieBookingList bookings={results} />}
    </>
  );
};
