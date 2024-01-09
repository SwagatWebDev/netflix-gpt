import {addPopularMovies} from "../utils/movieSlice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {API_OPTION} from "../utils/constants";

const usePopularMovies = () => {
    // Fetch data from TMDB API and update Store
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies();
    }, []);

    const getPopularMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTION);
        const response = await data.json();
        console.log(response.results);
        dispatch(addPopularMovies(response.results));
    }
}

export default usePopularMovies;
