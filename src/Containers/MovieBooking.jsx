
import { Card, CardMedia, Typography } from '@material-ui/core';
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';
import { doMovieBooking } from '../Slices/MovieBookingSlicer';
import moment from 'moment';
import { Alert } from '@material-ui/lab';

export const MovieBooking = () => {
    const [formState, setFormState] = useState({
        first_name: {

            value: '',
            error: false,
            helperText: null,

        },
        last_name: {

            value: '',
            error: false,
            helperText: null,

        },
        email: {

            value: '',
            error: false,
            helperText: null,

        },
        number_of_seats: {

            value: '',
            error: false,
            helperText: null,

        },
        date: {


            value: null,
            error: false,
            helperText: null,

        }
    });
    const movieDetails = useSelector(state => state.movieDetails);
    const movieBooking = useSelector(state => state.movieBooking);
    const dispatch = useDispatch();

    const updateFormElementState = (name, property, value) => {
        setFormState(prevState => {
            return {
                ...prevState,
                [name]: {
                    ...prevState[name],
                    [property]: value
                }
            }
        })
    }


    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        updateFormElementState(name, 'value', value);
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validateField = (name, value) => {
        let error = false;
        let helperText = '';
        if (name === 'first_name') {
            if (!value) {
                error = true;
                helperText = 'Enter First Name';
            }
        } else if (name === 'last_name') {
            if (!value) {
                error = true;
                helperText = 'Enter Last Name';

            }
        } else if (name === 'email') {
            if (!value) {
                error = true;
                helperText = 'Enter Email Address';
            } else if (!validateEmail(value)) {
                error = true;
                helperText = 'Enter Valid Email Address';
            }
        } else if (name === 'number_of_seats') {
            if (!value) {
                error = true;
                helperText = 'Enter Number of Seats to Book';
            } else if (value < 1 || value > 10) {
                error = true;
                helperText = 'You are allowed to book minimum 1 seat and maximum 10 Seats';
            }
        } else if (name === 'date') {
            if (!value) {
                error = true;
                helperText = 'Enter Valid Date';
            }
        }
        updateFormElementState(name, 'error', error);
        updateFormElementState(name, 'helperText', helperText);

        return !error;

    }

    const validateForm = () => {
        const fieldsNames = Object.keys(formState);
        for (let fieldName of fieldsNames) {
            const { value } = formState[fieldName];
            if (!validateField(fieldName, value)) {
                return false;
            }
        }
        return true;
    }

    const getPayload = () => {
        const payload = {movie: {
            id: movieDetails.id,
            title: movieDetails.title,
            poster_path: movieDetails.poster_path
        }};
        Object.keys(formState).forEach(key => {
            payload[key] = formState[key].value;
            if (key === 'date') {
                payload[key] = moment(payload[key]).format('DD-MM-yyyy');
            }
            
        })
        return payload;
    }




    const onSubmitHandler = () => {
        if (validateForm()) {
            
            
            dispatch(doMovieBooking(getPayload()));
        }
    }







    return <>
        <Grid container alignItems="center" justify="center" direction="row">
            <Grid item >
            {movieBooking.status === 'BOOKED' && <Alert severity="success">Booked the ticket(s) successfully</Alert>}
            {movieBooking.message && <Alert severity="error">{movieBooking.message}</Alert>}
            </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center" direction="row" spacing={1}>
            <Grid item>
                <Card>
                    <CardMedia
                        component="img"
                        height="350"
                        width="300"
                        image={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
                        alt={movieDetails.title}
                    />
                </Card>

            </Grid>
            <Grid item>
                <Card className="booking-form-card">
                    <Typography variant="h5"> Book Movie</Typography>
                    <Grid container alignItems="center" justify="center" direction="column">

                        <Grid item className="booking-form-item">
                            <TextField
                                type="text"
                                name="first_name"
                                fullWidth
                                onChange={onChangeHandler}
                                error={formState['first_name'].error}
                                helperText={formState['first_name'].helperText}
                                value={formState['first_name'].value}
                                label="First Name"

                            />
                        </Grid>
                        <Grid item className="booking-form-item">
                            <TextField
                                type="text"
                                name="last_name"
                                fullWidth
                                onChange={onChangeHandler}
                                error={formState['last_name'].error}
                                helperText={formState['last_name'].helperText}
                                value={formState['last_name'].value}
                                label="Last Name"

                            />
                        </Grid>
                        <Grid item className="booking-form-item">
                            <TextField
                                type="text"
                                name="email"
                                fullWidth
                                onChange={onChangeHandler}
                                error={formState['email'].error}
                                helperText={formState['email'].helperText}
                                value={formState['email'].value}
                                label="Email"

                            />
                        </Grid>
                        <Grid item className="booking-form-item">
                            <TextField
                                type="number"
                                name="number_of_seats"
                                fullWidth
                                onChange={onChangeHandler}
                                error={formState['number_of_seats'].error}
                                helperText={formState['number_of_seats'].helperText}
                                value={formState['number_of_seats'].value}
                                label="Number Of Seats"

                            />
                        </Grid>
                        <Grid item className="booking-form-item">
                            <div className="padding10">
                                <KeyboardDatePicker

                                    name="date"
                                    fullWidth
                                    onChange={(value) => onChangeHandler({ target: { name: 'date', value } })}
                                    error={formState['date'].error}
                                    helperText={formState['date'].helperText}
                                    value={formState['date'].value}
                                    label="Booking Date"
                                    format="DD/MM/yyyy"
                                    disablePast
                                    autoOk
                                    minDate={new Date()}
                                    minDateMessage={'Choose the Future Date'}
                                    invalidDateMessage={'Invalid Date'}

                                />
                            </div>
                        </Grid>
                        <Grid item className="booking-form-item">
                            <Button color="primary" variant="contained" onClick={onSubmitHandler} disabled={movieBooking.status === 'BOOKED'}> Book </Button>
                        </Grid>

                    </Grid>

                </Card>
            </Grid>
        </Grid>


    </>
}