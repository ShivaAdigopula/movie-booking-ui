import axios from "axios";
console.log({ env: process.env })
export const AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_SERVER_URL,
    timeout: 10000,
  });
