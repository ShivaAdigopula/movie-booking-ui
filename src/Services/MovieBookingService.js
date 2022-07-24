import { AxiosInstance } from "../Utils/AxiosInstance";

export const bookMovie = async (request) => {
  try {
    const response = await AxiosInstance.post("/movies/booking", request);

    if (response) {
      return response.data;
    }
  } catch (e) {
    console.log(`bookMovie service call failed due to ${e}`);
    return e.response.data;
  }
};

export const searchBookings = async ({
  key = "",
  fromDate = "",
  toDate = "",
}) => {
  try {
    const response = await AxiosInstance.get(
      `/movies/booking/search?key=${key}`
    );

    if (response) {
      return response.data;
    }
  } catch (e) {
    console.log(`searchBookings service call failed due to ${e}`);
    return [];
  }
};

export const cancelBooking = async (id) => {
  try {
    const response = await AxiosInstance.put(`/movies/booking/cancel/${id}`);

    if (response) {
      return response.data;
    }
  } catch (e) {
    console.log(`cancelBooking service call failed due to ${e}`);
    return e.response.data;
  }
};
