import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

export const Browse = () => {

    useNowPlayingMovies();

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
