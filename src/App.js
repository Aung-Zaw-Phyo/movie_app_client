import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, {loader as homeLoader} from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Popular, {loader as popularLoader} from "./pages/Movie/Popular";
import Playing, {loader as playingLoader} from "./pages/Movie/Playing";
import Upcoming, {loader as upcomingLoader} from "./pages/Movie/Upcoming";
import TopRated, {loader as topRatedLoader} from "./pages/Movie/TopRated";
import Series, {loader as seriesLoader} from "./pages/Series";
import Pricing from "./pages/Pricing";
import MovieDetail, {loader as movieDetailLoader} from "./pages/MovieDetail";
import SeriesDetail, {loader as seriesDetailLoader} from "./pages/SeriesDetail";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout/>,
        id: 'root',
        errorElement: <Error/>,
        loader: homeLoader,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'movie',
                children: [
                    {
                        path: 'detail/:id',
                        element: <MovieDetail/>,
                        loader: movieDetailLoader
                    },
                    {
                        path: 'popular',
                        element: <Popular/>,
                        loader: popularLoader
                    },
                    {
                        path: 'now-playing',
                        element: <Playing/>,
                        loader: playingLoader
                    },
                    {
                        path: 'upcoming',
                        element: <Upcoming/>,
                        loader: upcomingLoader
                    },
                    {
                        path: 'top-rated',
                        element: <TopRated/>,
                        loader: topRatedLoader
                    },
                ]
            },
            {
                path: 'series',
                children: [
                    {
                        index: true,
                        element: <Series/>,
                        loader: seriesLoader
                    }, 
                    {
                        path: 'detail/:id',
                        element: <SeriesDetail/>,
                        loader: seriesDetailLoader
                    }
                ]
            },
            {
                path: 'pricing',
                element: <Pricing/>
            }
        ]
    }
])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
