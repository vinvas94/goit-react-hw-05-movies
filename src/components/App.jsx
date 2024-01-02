import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cats = lazy(() => import('./Cast/Cast'));
const NotFound404 = lazy(() => import('./NotFound404/NotFound404'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cats />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<Navigate to={'/'} />} /> */}
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
};
