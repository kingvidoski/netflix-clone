import axios from '../axios';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const Row = ({title, fetchUrl, isLarge}) => {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {

            
            movieTrailer(movie || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((err) => console.log(err));
        }
    };

    return (
    <div className='row'>
            <h2>{title}</h2>
            <div className='row_image'>
                {
                    movies.map((movie) => {
                        return <img
                                    className={isLarge ? "" : "small"} 
                                    key={movie.id} 
                                    src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
                                    alt={movie.name || movie.title} 
                                    onClick={movie => handleClick(movie.target.alt)}
                                />
                    })
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
    )
}

export default Row
