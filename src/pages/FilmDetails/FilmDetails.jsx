import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getDetailMovie } from 'api/fetchFilm';
import {
  Additional,
  Container,
  DataText,
  Genres,
  ListOfAdditional,
  Overview,
  Title,
  WrapperAdditional,
  WrapperMain,
} from './FilmDetails.styled';

// зображення користувача за замовчуванням
import defaultPicture from '../../components/Cast/avatar-picture.png';
import { NotFound } from 'components/NotFound';

const FilmDetails = () => {
  const { id } = useParams();
  const location = useLocation(); //для отримання шляху з якого прийшли
  const backLinkRef = useRef(location.state?.from ?? '/'); //для зберігання шляху з якого прийшли
  const [info, setInfo] = useState({})
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const film = await getDetailMovie(id);
        
        if (!film) {
          setError('Інформація по фільму відсутня');
          setStatus('rejected');
        } else {
          setInfo(film)
          setStatus('resolved');
        }
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    };

    fetchFilms();
  }, [id]);

  const {genres, release_date, poster_path, title, overview, vote_average } = info;

 
  const urlImg = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultPicture;
  
  const date = release_date?.split('-')[0];

  return (
    <Container>
      <NavLink to={backLinkRef.current}>Back</NavLink>



      {status === 'rejected' && <NotFound error={error}/>}

      {status === 'resolved' && (
        <WrapperMain>
          <img src={urlImg} alt={title} />
          <div>
            <Title>
              {title} <span> ({date})</span>
            </Title>
            <DataText>User Score: {(vote_average * 10).toFixed(0)} %</DataText>
            <Overview>Overview</Overview>
            <DataText>{overview}</DataText>
            <Genres>Genres</Genres>
            <DataText>{genres.map(el => el.name).join(' / ')}</DataText>
          </div>
        </WrapperMain>
      )}

      {status === 'resolved' && (
        <WrapperAdditional>
          <Additional>Additional information</Additional>
          <ListOfAdditional>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ListOfAdditional>
        </WrapperAdditional>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default FilmDetails;