import React, { Suspense } from "react";
import { Await, Link, defer, json, useFetcher, useLoaderData } from "react-router-dom";
import coming_img from './../../images/coming.jpg'
import ComponentLoading from "../../components/UI/ComponentLoading";
import ComponentError from "../../components/UI/ComponentError";
import Movies from "../../components/UI/Movies";

const Upcoming = () => {
    const fetcher = useFetcher()
    const loadedData = useLoaderData()
    const resolveData = fetcher.data && fetcher.data.movies ? fetcher.data.movies : loadedData.movies
    return (
        <>
            <div className="w-full relative"> 
                <img src={coming_img} className="min-h-[80vh] lg:h-auto bg-cover bg-top object-cover" alt="" />
                <div className="absolute top-0 bottom-0 right-0 left-0  p-4 bg-gradient-to-r from-[#0c171fb9] from-0% via-[#0c171fcd] via-100% py-6">
                    <div className="container flex flex-col justify-center items-start h-full">
                        <h1 className="text-[28px] font-bold mb-4">The Nun II</h1>
                        <p className="mb-5">Horror Mystery Thriller| 1h 50m</p>
                        <Link to='/movie/detail/968051'>
                            <button className="mb-3">Watch Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container py-10">
                <Suspense fallback={<ComponentLoading/>}>
                    <Await resolve={resolveData} errorElement={<ComponentError/>}>
                        {(data) => <Movies data={data} fetcher={fetcher} type='/movie/upcoming'/>}
                    </Await>
                </Suspense>
            </div>
        </>
    );
};

export default Upcoming;


const movieLoader = async (request) => {
    let url = process.env.REACT_APP_API_URL + '/movie/upcoming'
    const paginateLink = request.url.split('link=')[1]
    if (paginateLink) {
        url = paginateLink
    }
    const response = await fetch(url, {
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
        movies: movieLoader(request)
    })
}