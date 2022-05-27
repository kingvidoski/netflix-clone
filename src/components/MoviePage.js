import requests from '../request';
import Banner from './Banner';
import Row from './Row';

const MoviePage = () => {
    return (
    <div className='Container'>
        <Banner />
        <Row title={'NETFLIX ORIGINALS'} fetchUrl={requests.fetchNetflixOriginals} isLarge />
        <Row title={'Trending Now'} fetchUrl={requests.fetchTrending} />
        <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated} />
        <Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies} />
        <Row title={'Romance Movies'} fetchUrl={requests.fetchRomanceMovies} />
        <Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies} />
        <Row title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies} />
        <Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries} />
    </div>
    )
}

export default MoviePage
