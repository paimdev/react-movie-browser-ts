import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { fetchMovieDetails } from "../services/api";
import { Movie } from "../types/Movie";

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const loadDetails = async () => {
            if (id) setMovie(await fetchMovieDetails(id));
        };
        loadDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <VideoPlayer videoUrl="https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4" />
        </div>
    );
};

export default Details;
