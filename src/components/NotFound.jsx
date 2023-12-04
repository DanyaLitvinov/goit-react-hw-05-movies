import { Link } from 'react-router-dom';
 const NotFound = ({error}) => {
    return <div><Link to="/">Go back home </Link>{error ? error : "404 - Сторінка не знайдена"}</div>;
  } ;
  export default NotFound ;