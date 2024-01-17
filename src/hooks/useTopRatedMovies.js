import {addTopRatedMovies} from "../utils/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {API_OPTION} from "../utils/constants";

const useTopRatedMovies = () => {
    // Fetch data from TMDB API and update Store
    const dispatch = useDispatch();

    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, []);

    const getTopRatedMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTION);
        const response = await data.json();
        console.log(response.results);
        dispatch(addTopRatedMovies(response.results));
    }
}

export default useTopRatedMovies;
