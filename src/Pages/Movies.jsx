import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoveName } from '../Api/Api';
import DefaultImg from '../img/imageNotFound.jpg';
import {
  Title,
  Form,
  Input,
  Btn,
  FilmList,
  FilmItem,
  FilmLink,
  Img,
  Name,
} from '../styled/styled';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMove, setSearchMove] = useState([]);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMoveName = searchParams.get('query') ?? '';

  const handleSearch = event => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchQuery.trim() === ''
      ? alert('enter the name of the movie to search')
      : setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    const trendingMoves = async () => {
      try {
        const data = await getMoveName(searchMoveName);
        const newMovis = data.data.results;
        setSearchMove(newMovis);
      } catch (error) {
        console.error('error');
      }
    };
    trendingMoves();
  }, [searchMoveName]);

  return (
    <>
      <Title>Search Films</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search movies"
        />
        <Btn type="submit">Search</Btn>
      </Form>

      <FilmList>
        {searchMove &&
          searchMove.map(({ id, title, poster_path }) => (
            <FilmItem key={id}>
              <FilmLink
                key={id}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
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
    </>
  );
};

export default Movies;
