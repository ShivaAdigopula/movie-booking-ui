import { Grid, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieBookingCard } from '../Components/MovieBookingCard';
import { Search } from '../Components/Search';
import { searchMovieBookings } from '../Slices/ManageMovieBookingsSlicer';

export const ManageBookings = () => {
    const bookings = useSelector(state => state.bookings);
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState(null);
   
    
    const onSearchSubmitHandler = () => {
        dispatch(searchMovieBookings({key: searchText}));
    } 

    useEffect(() => {
        dispatch(searchMovieBookings({}));
    }, [dispatch])

    return <>
        <Typography variant="h3">Manage Bookings</Typography>
        <Search 
        onChangeValue={setSearchText} 
        onSubmit={onSearchSubmitHandler} 
        onEnter={onSearchSubmitHandler}
        placeholder= {'Search Bookings...!'}/>
        <Grid container justifyContent='space-around' alignContent='center' alignItems='center'>

        {bookings && 
            bookings.map(booking => {
               return <MovieBookingCard booking={booking}/>
            })
        }
        
        
        
        </Grid>
        {bookings.length === 0 && 
            <Alert severity="warning">No Bookings found</Alert>       }
    </>
}