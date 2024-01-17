import {addTopRatedMovies, addUpcomingMovies} from "../utils/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {API_OPTION} from "../utils/constants";

const useUpcomingMovies = () => {
    // Fetch data from TMDB API and update Store
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, []);

    const getUpcomingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTION);
        const response = await data.json();
        console.log(response.results);
        dispatch(addUpcomingMovies(response.results));
    }
}

export default useUpcomingMovies;
