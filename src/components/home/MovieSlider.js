import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import Movie from "../UI/Movie";

const MovieSlider = (props) => {
    const movies = props.data.data
    return (
        <div>
        <Swiper
            breakpoints={{
                520: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                738: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                994: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                1250: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1484: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            // modules={[Autoplay]}
            className="mySwiper"
        >
            {
                movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <Movie movie={movie}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
    );
};

export default MovieSlider;
