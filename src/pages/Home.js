import React, { Suspense } from "react";
import hero from './../images/hero2.jpg'
import series_img from './../images/series_img.webp'
import { Await, defer, json, Link, useRouteLoaderData } from "react-router-dom";
import MovieSlider from '../components/home/MovieSlider'
import ComponentLoading from "../components/UI/ComponentLoading";
import ComponentError from "../components/UI/ComponentError";


const Home = () => {
    const loadedData = useRouteLoaderData('root')
    return (
        <>
            <div className="w-full"> 
                <img src={hero} className="min-h-[80vh] lg:h-auto bg-cover bg-top object-cover" alt="" />
            </div>

            <div className="container py-10">
                <div className="flex justify-between items-center py-3 mb-10 border-b-[1px] border-white">
                    <h1 className="text-[24px]">Now Playing Movies</h1>
                    <div><Link to='/movie/now-playing'>View all</Link></div>
                </div>

                <Suspense fallback={<ComponentLoading/>}>
                    <Await resolve={loadedData.playing_movie} errorElement={<ComponentError/>}>
                        {(data) => <MovieSlider data={data}/>}
                    </Await>
                </Suspense>

            </div>

            <div className="container py-10">
                <img src={series_img} className="rounded-lg" alt="" />
            </div>

            <div className="container py-10">
                <div className="flex justify-between items-center py-3 mb-10 border-b-[1px] border-white">
                    <h1 className="text-[24px]">Upcoming Movies</h1>
                    <div><Link to='/movie/upcoming'>View all</Link></div>
                </div>

                <Suspense fallback={<ComponentLoading/>}>
                    <Await resolve={loadedData.upcoming_movie} errorElement={<ComponentError/>}>
                        {(data) => <MovieSlider data={data}/>}
                    </Await>
                </Suspense>

            </div>
        </>
    );
};

export default Home;

const playingMovieLoader = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL + '/movie/playing', {
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

const upcomingMovieLoader = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL + '/movie/upcoming', {
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

export const loader = () => {
    return defer({
        playing_movie: playingMovieLoader(),
        upcoming_movie: upcomingMovieLoader()
    })
}