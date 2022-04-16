import { Button, Card, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelMovieBooking, searchMovieBookings } from '../Slices/ManageMovieBookingsSlicer';
export const MovieBookingCard = ({booking}) => {
        const dispatch = useDispatch();

        const cancelHandler = () => {
            dispatch(cancelMovieBooking(booking.id));
            
            setTimeout(() => dispatch(searchMovieBookings({})), 2000);
        }

    
        const { movie } = booking;
        return (
            <Card className="movie-booking-card">
                <Grid container alignItems="flex-start" justify="flex-start" direction="row" spacing={2}>
                    <Grid item >

                        <CardMedia
                            component="img"
                            height="200"
                            width="150"
                            image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={booking.title}
                        />

                    </Grid>
                    <Grid item  >
                        <Grid container alignItems="flex-start" justify="center" direction="column">
                            <Grid item >
                                <Typography>{movie.title}</Typography>
                            </Grid>
                            <Grid item container alignItems="flex-start" justify="flex-start" direction="column">
                                <Grid item>
                                    Booked By : {`${booking.first_name} ${booking.last_name}`}
                                </Grid>
                                <Grid item >
                                    Number Of Seats : {booking.number_of_seats}
                                </Grid>
                                <Grid item >
                                    Date Of Booking : {booking.date}
                                </Grid>
                                <Grid item >
                                    Status : {booking.status}
                                </Grid>
                                { booking.status === 'BOOKED' && <Grid item >
                                    <Button color="primary" variant="outlined" onClick={cancelHandler}>Cancel Booking</Button>
                                </Grid> }



                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        )
    
}