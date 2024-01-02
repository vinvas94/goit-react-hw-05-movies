import React from 'react';
import { FilmList, FilmItem, FilmLink, Img, Name } from '../../styled/styled';
import DefaultImg from '../../img/imageNotFound.jpg';

const MoviesList = ({ movies, location }) => {
  return (
    <FilmList>
      {movies.map(({ id, title, poster_path }) => (
        <FilmItem key={id}>
          <FilmLink to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : DefaultImg
              }
              alt={title}
            />
            <Name>{title}</Name>
          </FilmLink>
        </FilmItem>
      ))}
    </FilmList>
  );
};

export default MoviesList;
