import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { fetchMovies } from "../services/api";
import { Movie } from "../types/Movie";

const Home: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [tvShows, setTvShows] = useState<Movie[]>([]);

    useEffect(() => {
        const loadContent = async () => {
            setMovies(await fetchMovies("movie"));
            setTvShows(await fetchMovies("tv"));
        };
        loadContent();
    }, []);

    return (
        <div>
            <Carousel title="Popular Movies" items={movies} />
            <Carousel title="Popular TV Shows" items={tvShows} />
        </div>
    );
};

export default Home;
