import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoveName } from '../Api/Api';
import { Title, Form, Input, Btn } from '../styled/styled';
import MoviesList from '../components/MovieList/MovieList';

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

      <MoviesList movies={searchMove} location={location} />
    </>
  );
};

export default Movies;
