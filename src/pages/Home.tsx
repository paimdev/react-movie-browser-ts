import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import { fetchMovies, fetchQueryMovies } from "../services/api";
import { Movie } from "../types/Movie";

const Home: React.FC = () => {
    // State for carousels
    const [movies, setMovies] = useState<Movie[] | null>(null);
    const [tvShows, setTvShows] = useState<Movie[] | null>(null);
    const [loadingMovies, setLoadingMovies] = useState(true);
    const [loadingTvShows, setLoadingTvShows] = useState(true);
    const [errorMovies, setErrorMovies] = useState(false);
    const [errorTvShows, setErrorTvShows] = useState(false);

    // State for search functionality
    const [searchResults, setSearchResults] = useState<Movie[] | null>(null);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [errorSearch, setErrorSearch] = useState(false);

    // Load popular movies and TV shows
    useEffect(() => {
        const loadMovies = async () => {
            setLoadingMovies(true);
            try {
                const results = await fetchMovies("movie");
                setMovies(results);
            } catch {
                setErrorMovies(true);
            } finally {
                setLoadingMovies(false);
            }
        };

        const loadTvShows = async () => {
            setLoadingTvShows(true);
            try {
                const results = await fetchMovies("tv");
                setTvShows(results);
            } catch {
                setErrorTvShows(true);
            } finally {
                setLoadingTvShows(false);
            }
        };

        loadMovies();
        loadTvShows();
    }, []);

    // Handle search functionality
    const handleSearch = async (query: string) => {
        if (!query.trim()) {
            // Reset search state if query is empty
            setSearchResults(null);
            setErrorSearch(false);
            return;
        }

        setLoadingSearch(true);
        try {
            const results = await fetchQueryMovies(query);
            setSearchResults(results);
            setErrorSearch(false);
        } catch {
            setErrorSearch(true);
        } finally {
            setLoadingSearch(false);
        }
    };

    return (
        <div className="container">
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />

            {/* Search Results */}
            {searchResults ? (
                <Carousel
                    title="Search Results"
                    items={searchResults}
                    loading={loadingSearch}
                    error={errorSearch}
                />
            ) : (
                <>
                    {/* Popular Movies Carousel */}
                    <Carousel
                        title="Popular Movies"
                        items={movies}
                        loading={loadingMovies}
                        error={errorMovies}
                    />

                    {/* Popular TV Shows Carousel */}
                    <Carousel
                        title="Popular TV Shows"
                        items={tvShows}
                        loading={loadingTvShows}
                        error={errorTvShows}
                    />
                </>
            )}
        </div>
    );
};

export default Home;
