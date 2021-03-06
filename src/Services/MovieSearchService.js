import { AxiosInstance } from "../Utils/AxiosInstance";

const GET_FEATURED_MOVIES_ENDPOINT = "/movies";
const GET_MOVIE_DETAILS_ENDPOINT = "/movies";

export const getFeaturedMovies = async () => {
  try {
    const response = await AxiosInstance.get(GET_FEATURED_MOVIES_ENDPOINT);
    if (response) {
      return response.data.results;
    }
  } catch (e) {
    console.log(`getFeaturedMovies service call failed due to ${e}`);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await AxiosInstance.get(
      GET_MOVIE_DETAILS_ENDPOINT + "/" + id
    );
    console.log(response);
    if (response) {
      return response.data;
    }
  } catch (e) {
    console.log(`getMovieDetails service call failed due to ${e}`);
    return [];
  }
};

export const searchMoviesAsync = async (query) => {
  try {
    const response = await AxiosInstance.get(
      `/movies/search?query=${encodeURIComponent(query)}`
    );
    if (response) {
      return response.data.results;
    }
  } catch (e) {
    console.log(`searchMoviesAsync service call failed due to ${e}`);
    return [];
  }
};

export const getMovieReviews = async (id, page) => {
  try {
    const response = await AxiosInstance.get(
      `/movies/${id}/reviews?page=${page}`
    );
    // console.log(response);
    if (response) {
      return response.data;
    }
  } catch (e) {
    console.log(`getMovieReviews service call failed due to ${e}`);
    return [];
  }
};
