import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import ComponentError from "../components/UI/ComponentError";
import ComponentLoading from "../components/UI/ComponentLoading";

const Movie = (props) => {
    const movie = props.data.data
    return (
        <>
            <div className='w-full relative min-h-[60vh]' >
                <img src={movie.cover} className="h-[80vh] lg:h-auto bg-cover bg-center object-cover" alt="" />
                <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center bg-[#1919196d] p-4">
                    <h1 className="text-[30px] font-bold text-center">{movie.title}</h1>
                </div>
            </div>
            <div className="container py-10">
                <div className="flex flex-wrap">
                    <div className="w-1/4 p-3 hidden md:block">
                        <img src={movie.thumbnail} className="rounded-lg !w-full" alt="" />
                    </div>
                    <div className="w-full md:w-3/4 p-3">
                        <div className="mb-4">
                            <h1 className="text-[24px]">{movie.title}</h1>
                            <p className="text-[14px]"> 
                                {
                                    movie.genres.map(genere => (
                                        <span key={genere} className="mr-3">{genere}</span>
                                    ))
                                }
                                | <span>{movie.runtime}</span>
                            </p>
                        </div>
                        <div className="mb-4">
                            <h1 className="text-[20px]">Overview</h1>
                            <p>
                                {movie.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Detail = () => {
    const loadedData = useLoaderData()
    return (
        <Suspense fallback={<ComponentLoading className=" mt-32"/>}>
            <Await resolve={loadedData.movie} errorElement={<ComponentError/>}>
                {(data) => <Movie data={data}/>}
            </Await>
        </Suspense>
    );
};

export default Detail;


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
