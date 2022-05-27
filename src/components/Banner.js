import axios from "../axios";
import { useEffect, useState } from "react";
import requests from "../request";


const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
    <header 
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
        }}
    >
        <div className="header_content">
            <h1 className="header_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="header_buttons">
                <button>Play</button>
                <button>My List</button>
            </div>
            <h1 className="header_description">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="fade"></div>
    </header>
    )
}

export default Banner
