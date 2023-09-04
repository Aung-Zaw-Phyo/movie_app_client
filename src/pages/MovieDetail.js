import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import ComponentError from "../components/UI/ComponentError";
import ComponentLoading from "../components/UI/ComponentLoading";
import { BsFillPlayFill } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Movie = (props) => {
    const movie = props.data.data
    return (
        <>
            <div className='w-full relative min-h-[60vh]' >
                <img src={movie.cover} className="min-h-[80vh] lg:h-auto bg-cover bg-center object-cover" alt="" />
                <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-wrap justify-center items-center p-4 bg-gradient-to-r from-[#0c171fb9] from-0% via-[#0c171fcd] via-100% py-6">
                        <div className="md:w-2/5 lg:w-1/4 p-3 hidden md:flex h-full  justify-center items-center">
                            <img src={movie.thumbnail} className="rounded-lg h-[70%]" alt="" />
                        </div>
                        <div className="w-full md:w-3/5 lg:w-3/4 p-3">
                            <div className="mb-4">
                                <h1 className="text-[28px] font-bold">{movie.title}</h1>
                                <p className=""> 
                                    {
                                        movie.genres.map(genere => (
                                            <span key={genere} className="mr-3">{genere}</span>
                                        ))
                                    }
                                    | <span>{movie.runtime}</span>
                                </p>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-[22px]">Overview</h1>
                                <p>
                                    {movie.overview}
                                </p>
                            </div>
                            <button className="flex items-center justify-center p-3"><BsFillPlayFill size={22} className="mr-2"/> Play Trailer</button>
                    </div>
                </div>
            </div>
            <div className="container py-10">
                <h1 className="text-[24px] font-bold mb-4">Top Cast</h1>
                
                <div className="">
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
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {
                            movie.top_cast.map((cast) => (
                                <SwiperSlide key={cast.person_name}>
                                    <div >
                                        <img src={cast.cover} className="w-full rounded-lg mb-2" alt="" />
                                        <div>
                                            <div>{cast.person_name}</div>
                                            <div className="text-[#ffffffb8]">{cast.character_name}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

            </div>
        </>
    )
}

const MovieDetail = () => {
    const loadedData = useLoaderData()
    return (
        <Suspense fallback={<ComponentLoading className="mt-32"/>}>
            <Await resolve={loadedData.movie} errorElement={<ComponentError className="mt-32"/>}>
                {(data) => <Movie data={data}/>}
            </Await>
        </Suspense>
    );
};

export default MovieDetail;


const movieLoader = async (request, params) => {
    const id = params.id
    const response = await fetch(process.env.REACT_APP_API_URL + '/movie/detail?id=' + id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if(!response.ok) {
        throw json({message: 'something wrong.'}, {status: 500})
    }

    const resData = await response.json()
    return resData;
}

export const loader = ({request, params}) => {
    return defer({
        movie: movieLoader(request, params)
    })
}
