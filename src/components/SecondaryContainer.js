import {useSelector} from "react-redux";
import MovieList from "./MovieList";

export const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    console.log(movies);
    return (
        movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className="-mt-56 pl-12 relative z-20">
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                    <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
                    <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
                    <MovieList title={"Popular"} movies={movies.popularMovies}/>
                    {/*
               MovieList - Popular
                MovieCard * n
               MovieList - NowPlaying
               MovieList - Trending
               MovieList - Horror
            */}
                </div>
            </div>
        )
    )
}

export default SecondaryContainer;
