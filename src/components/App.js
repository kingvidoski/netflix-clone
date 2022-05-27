import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../index.scss';
import Login from './Login';
import MoviePage from './MoviePage';
import Nav from './Nav';


const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Login />}></Route>
                <Route exact path="/movie-page" element={<MoviePage />}></Route>
            </Routes>
        </Router>
    )
}

export default App
