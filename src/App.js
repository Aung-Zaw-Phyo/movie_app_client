import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, {loader as homeLoader} from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Popular, {loader as popularLoader} from "./pages/Movie/Popular";
import Playing, {loader as playingLoader} from "./pages/Movie/Playing";
import Upcoming, {loader as upcomingLoader} from "./pages/Movie/Upcoming";
import TopRated, {loader as topRatedLoader} from "./pages/Movie/TopRated";
import Series, {loader as seriesLoader} from "./pages/Series";

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout/>,
        id: 'root',
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
                element: <Series/>,
                loader: seriesLoader
            }
        ]
    }
])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
