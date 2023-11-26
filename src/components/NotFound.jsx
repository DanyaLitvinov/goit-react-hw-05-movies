export const NotFound = ({error}) => {
    return <div>{error ? error : "404 - Сторінка не знайдена"}</div>;
  }