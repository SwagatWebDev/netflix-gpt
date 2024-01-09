import {IMG_CDN_URL} from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return (
        <div className="w-40 pr-4">
            <img className="cursor-pointer" alt="Movie card" src={IMG_CDN_URL + posterPath}/>
        </div>
    )
}

export default MovieCard;
