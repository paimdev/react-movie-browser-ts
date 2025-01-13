import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Movie } from "../types/Movie";
import { Link } from "react-router-dom";

interface CarouselProps {
    title: string;
    items: Movie[];
}

const Carousel: React.FC<CarouselProps> = ({ title, items }) => (
    <div>
        <h2>{title}</h2>
        <Swiper spaceBetween={10} slidesPerView={4}>
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    <Link to={`/details/${item.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            alt={item.title}
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);

export default Carousel;
