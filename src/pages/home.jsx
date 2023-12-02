import FilmList from 'components/FilmList/FilmList';
import { useLocation } from 'react-router-dom';
import { getMovies } from 'api/fetchFilm';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const HomeTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  color: black;
`;

const Home = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation(); //для отримання шляху з якого переходимо для передачи через props

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getMovies();
        const films = data.results;
        setFilms(films);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFilms();
  }, []);

  return ( <div><HomeTitle>Trending today</HomeTitle><FilmList isHomePage films={films} error={error} location={location}/></div>);
};

export default Home;
