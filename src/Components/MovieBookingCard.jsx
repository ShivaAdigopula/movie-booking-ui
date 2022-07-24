import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import {
  cancelMovieBooking,
  searchMovieBookings,
} from "../Slices/ManageMovieBookingsSlicer";
export const MovieBookingCard = ({ booking }) => {
  const dispatch = useDispatch();

  const cancelHandler = () => {
    dispatch(cancelMovieBooking(booking.id));

    setTimeout(() => dispatch(searchMovieBookings({})), 2000);
  };

  const { movie } = booking;
  return (
    <Card className="movie-booking-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="150"
          image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={booking.title}
        />

        <CardContent>
          <Grid
            container
            alignItems="flex-start"
            justify="center"
            direction="column"
          >
            <Grid
              item
              container
              alignItems="flex-start"
              justify="flex-start"
              direction="column"
            >
              <Grid item>
                Booked By : {`${booking.first_name} ${booking.last_name}`}
              </Grid>
              <Grid item>Email : {booking.email}</Grid>
              <Grid item>Number Of Seats : {booking.number_of_seats}</Grid>
              <Grid item>Date Of Booking : {booking.date}</Grid>
              <Grid item>Status : {booking.status}</Grid>
              {booking.status === "BOOKED" &&
                moment(booking.date, "DD-MM-YYYY").toDate() > new Date() && (
                  <Grid item>
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={cancelHandler}
                    >
                      Cancel Booking
                    </Button>
                  </Grid>
                )}
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
