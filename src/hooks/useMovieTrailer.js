import {useEffect} from "react";
import {addTrailerVideo} from "../utils/movieSlice";
import {useDispatch} from "react-redux";
import {API_OPTION} from "../utils/constants";

const useMovieTrailer = (movieId) => {

    // Fetch trailer video and update the store with trailer video data

    const dispatch = useDispatch();

    useEffect(() => {
        getMovieVideos();
    }, []);

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId+ "/videos?language=en-US", API_OPTION);
        const response = await data.json();
        const filterData = response.results.filter(movie => movie.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : response.results[0];
        dispatch(addTrailerVideo(trailer));
    }

}

export default useMovieTrailer;
