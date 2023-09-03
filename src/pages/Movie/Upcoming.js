import React, { Suspense } from "react";
import { Await, defer, json, useFetcher, useLoaderData } from "react-router-dom";
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
            <div className="w-full"> 
                <img src={coming_img} className="w-full h-full bg-cover bg-center" alt="" />
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