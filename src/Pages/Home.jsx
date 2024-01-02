import { useState, useEffect } from 'react';
import { getMoveTrending } from '../Api/Api';
import { useLocation } from 'react-router-dom';
import MoviesList from '../components/MovieList/MovieList';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const trendingMoves = async () => {
      try {
        const data = await getMoveTrending();
        const newMovil = data.data.results;
        setTrending(newMovil);
      } catch (error) {
        console.error('error');
      }
    };
    trendingMoves();
  }, []);

  return (
    <div>
      <MoviesList movies={trending} location={location} />
    </div>
  );
};

export default Home;
