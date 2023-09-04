import React, { useState } from "react";
import Movie from "./Movie";
import ComponentLoading from "./ComponentLoading";

const Movies = (props) => {
    const [page, setPage] = useState(1)
    const movies = props.data.data
    let type = props.type
    let apiUrl = ''
    if(type === '/movie/popular') {
        apiUrl = '/movie?page='

    }else if(type === '/movie/now-playing') {
        apiUrl = '/movie/playing?page='

    }else if(type === '/movie/upcoming') {
        apiUrl = '/movie/upcoming?page='

    }else if(type === '/movie/top-rated') {
        apiUrl = '/movie/top-rated?page='

    }else if(type === '/series') {
        apiUrl = '/series?page='

    }

    const loadHandler = (link) => {
        props.fetcher.load(`${type}?index&link=${link}`)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const next = () => {
        let currentPg = page + 1
        loadHandler(process.env.REACT_APP_API_URL + apiUrl + currentPg)
        setPage((prevState) => prevState + 1)
    }
    const previous = () => {
        let currentPg = page - 1
        loadHandler(process.env.REACT_APP_API_URL + apiUrl + currentPg)
        setPage((prevState) => prevState - 1)
    }

    return (
        <>
            {props.fetcher.state === 'loading' && <ComponentLoading className='mb-6'/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {
                movies.map((movie) => (
                    <Movie movie={movie} key={movie.id} type={type}/>
                ))
            }
            </div>
            <div className="text-center mt-6">
                {
                    page > 1 && 
                    <button onClick={previous} className="m-1">Prev</button>
                }
                <button onClick={next} className="m-1">Next</button>
            </div>
        </>
    )
}

export default Movies;
