import React from "react";
import { Link } from "react-router-dom";

const Movie = ({movie, type}) => {
    let uri = '/movie/detail/' + movie.id
    if(type === '/series') {
        uri = '/series/detail/' + movie.id
    }
    return (
            <div className="relative rounded-lg group overflow-hidden cursor-pointer">
                <img src={movie.cover} className="rounded-lg group-hover:scale-110 w-full mx-auto duration-500" alt="" />
                <div className="
                    absolute top-0 bottom-0 p-1 h-full w-full
                    flex flex-col justify-end items-center
                    bg-gradient-to-t from-[#0c171ff7] from-0% via-[#0c171f5b] via-0% 
                    group-hover:from-10% group-hover:via-50%
                    duration-1000
                ">
                    <h1 className="mb-1 text-[18px] text-center translate-y-[200px] group-hover:translate-y-0 duration-500">{movie.title}</h1>
                    {/* <div className="mb-2 translate-y-[150px] group-hover:translate-y-0 duration-300">Release: {movie.release}</div> */}
                    <Link to={uri}>
                        <button className="mb-3 translate-y-[200px] group-hover:translate-y-0 duration-700">Watch Now</button>
                    </Link>
                </div>
            </div>
    );
};

export default Movie;
