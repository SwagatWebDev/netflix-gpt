import {addNowPlayingMovies} from "../utils/movieSlice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {API_OPTION} from "../utils/constants";

const useNowPlayingMovies = () => {
    // Fetch data from TMDB API and update Store
    const dispatch = useDispatch();

    const getNowPlayingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTION);
        const response = await data.json();
        dispatch(addNowPlayingMovies(response.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;
