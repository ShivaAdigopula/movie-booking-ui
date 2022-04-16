import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: 'https://movie-booking-srvc.herokuapp.com/',
    timeout: 10000,
  });