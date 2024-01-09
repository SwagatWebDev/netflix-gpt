import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

export const Browse = () => {

    useNowPlayingMovies();

    usePopularMovies();

    useTopRatedMovies();

    useUpcomingMovies();

    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
            {/*
               Main Container
                - VideoContainer
                - VideoTitle
                Secondary Container
                 - MovieList * n
                   - Cards * n
            */}
        </div>
    )
}

export default Browse;
