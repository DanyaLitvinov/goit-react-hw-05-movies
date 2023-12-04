import { Link } from 'react-router-dom';
import { Container, ListOfFilm } from './FilmList.stylaed';

const FilmList = ({films, error, location}) => {
  return (
    <Container>
     

      {error && <p>Вибачте, але щось пішло не так :(</p>}

      <ListOfFilm>
        {films.map(film => (
          <li key={film.id}>
              <Link to={ `/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ListOfFilm>
    </Container>
  );
};

export default FilmList;
