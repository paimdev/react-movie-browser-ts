import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Movie } from "../types/Movie";
import { Link } from "react-router-dom";

interface CarouselProps {
    title: string;
    items: Movie[] | null;
    loading: boolean;
    error: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ title, items, loading, error }) => {
    return (
        <div>
            <h2>{title}</h2>

            {loading && (
                <Swiper spaceBetween={10} slidesPerView={4}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <Skeleton height={250} width="100%" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {error && (
                <div style={{ color: "red", textAlign: "center" }}>
                    Failed to load {title}. Please try again later.
                </div>
            )}

            {!loading && !error && items && (
                <Swiper spaceBetween={10} slidesPerView={4}>
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link to={`/details/${item.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    alt={item.title}
                                    style={{
                                        borderRadius: "10px",
                                        width: "100%",
                                        height: "auto",
                                    }}
                                />
                                <p style={{ textAlign: "center", marginTop: "5px" }}>
                                    {item.title}
                                </p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default Carousel;
