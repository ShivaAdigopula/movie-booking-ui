import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieBookingCard } from "../Components/MovieBookingCard";
import { Search } from "../Components/Search";
import { searchMovieBookings } from "../Slices/ManageMovieBookingsSlicer";

export const ManageBookings = () => {
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState(null);

  const onSearchSubmitHandler = () => {
    dispatch(searchMovieBookings({ key: searchText }));
  };

  useEffect(() => {
    dispatch(searchMovieBookings({}));
  }, [dispatch]);

  return (
    <>
      <Search
        onChangeValue={setSearchText}
        onSubmit={onSearchSubmitHandler}
        onEnter={onSearchSubmitHandler}
        placeholder={"Search Bookings...!"}
      />
      <div className="grid place-content-center grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bookings &&
          bookings.map((booking) => {
            return <MovieBookingCard booking={booking} />;
          })}
      </div>
      {bookings.length === 0 && (
        <Alert severity="warning">No Bookings found</Alert>
      )}
    </>
  );
};
