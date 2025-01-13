import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import { fetchMovies, fetchQueryMovies, fetchGenres } from "../services/api";
import { Movie, Genre } from "../types/Movie";

const Home: React.FC = () => {
    const [movies, setMovies] = useState<Movie[] | null>(null);
    const [tvShows, setTvShows] = useState<Movie[] | null>(null);
    const [genreOneMovies, setGenreOneMovies] = useState<Movie[] | null>(null);
    const [genreTwoMovies, setGenreTwoMovies] = useState<Movie[] | null>(null);
    const [genres, setGenres] = useState<Genre[] | null>(null);
    const [selectedGenreOne, setSelectedGenreOne] = useState<number | null>(null);
    const [selectedGenreTwo, setSelectedGenreTwo] = useState<number | null>(null);

    const [loadingMovies, setLoadingMovies] = useState(true);
    const [loadingTvShows, setLoadingTvShows] = useState(true);
    const [loadingGenreOne, setLoadingGenreOne] = useState(false);
    const [loadingGenreTwo, setLoadingGenreTwo] = useState(false);
    const [errorMovies, setErrorMovies] = useState(false);
    const [errorTvShows, setErrorTvShows] = useState(false);
    const [errorGenreOne, setErrorGenreOne] = useState(false);
    const [errorGenreTwo, setErrorGenreTwo] = useState(false);

    const [searchResults, setSearchResults] = useState<Movie[] | null>(null);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [errorSearch, setErrorSearch] = useState(false);

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

        const loadGenres = async () => {
            try {
                const results = await fetchGenres();
                setGenres(results);
            } catch {
                console.error("Failed to load genres");
            }
        };

        loadMovies();
        loadTvShows();
        loadGenres();
    }, []);

    const loadGenreMovies = async (
        genreId: number,
        setMoviesState: React.Dispatch<React.SetStateAction<Movie[] | null>>,
        setLoadingState: React.Dispatch<React.SetStateAction<boolean>>,
        setErrorState: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        setLoadingState(true);
        try {
            const results = await fetchMovies(`discover/movie?with_genres=${genreId}`);
            setMoviesState(results);
        } catch {
            setErrorState(true);
        } finally {
            setLoadingState(false);
        }
    };

    const handleGenreOneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const genreId = parseInt(event.target.value, 10);
        setSelectedGenreOne(genreId);
        loadGenreMovies(genreId, setGenreOneMovies, setLoadingGenreOne, setErrorGenreOne);
    };

    const handleGenreTwoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const genreId = parseInt(event.target.value, 10);
        setSelectedGenreTwo(genreId);
        loadGenreMovies(genreId, setGenreTwoMovies, setLoadingGenreTwo, setErrorGenreTwo);
    };

    const handleSearch = async (query: string) => {
        if (!query.trim()) {
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
            <SearchBar onSearch={handleSearch} />

            {searchResults ? (
                <Carousel
                    title="Search Results"
                    items={searchResults}
                    loading={loadingSearch}
                    error={errorSearch}
                />
            ) : (
                <>
                    <Carousel
                        title="Popular Movies"
                        items={movies}
                        loading={loadingMovies}
                        error={errorMovies}
                    />

                    <Carousel
                        title="Popular TV Shows"
                        items={tvShows}
                        loading={loadingTvShows}
                        error={errorTvShows}
                    />

                    {genres && (
                        <>
                            <div className="genre-selector">
                                <label htmlFor="genre-one">Select Genre One:</label>
                                <select
                                    id="genre-one"
                                    onChange={handleGenreOneChange}
                                    value={selectedGenreOne || ""}
                                >
                                    <option value="" disabled>
                                        Choose a genre
                                    </option>
                                    {genres.map((genre) => (
                                        <option key={genre.id} value={genre.id}>
                                            {genre.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {selectedGenreOne && (
                                <Carousel
                                    title={`${genres.find((genre) => genre.id === selectedGenreOne)?.name || "Selected Genre"
                                        } Movies`}
                                    items={genreOneMovies}
                                    loading={loadingGenreOne}
                                    error={errorGenreOne}
                                />
                            )}
                        </>
                    )}

                    {genres && (
                        <>
                            <div className="genre-selector">
                                <label htmlFor="genre-two">Select Genre Two:</label>
                                <select
                                    id="genre-two"
                                    onChange={handleGenreTwoChange}
                                    value={selectedGenreTwo || ""}
                                >
                                    <option value="" disabled>
                                        Choose a genre
                                    </option>
                                    {genres.map((genre) => (
                                        <option key={genre.id} value={genre.id}>
                                            {genre.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {selectedGenreTwo && (
                                <Carousel
                                    title={`${genres.find((genre) => genre.id === selectedGenreTwo)?.name || "Selected Genre"
                                        } Movies`}
                                    items={genreTwoMovies}
                                    loading={loadingGenreTwo}
                                    error={errorGenreTwo}
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Home;
