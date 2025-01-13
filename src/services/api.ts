import axios from "axios";
import { Movie, Genre } from "../types/Movie.ts";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (type: string): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/${type}/popular`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

export const fetchQueryMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query },
  });
  return response.data.results;
};

export const fetchGenres = async (): Promise<Genre[]> => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    params: { api_key: API_KEY },
  });
  return response.data.genres;
};

export const fetchMovieDetails = async (id: string): Promise<Movie> => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};
