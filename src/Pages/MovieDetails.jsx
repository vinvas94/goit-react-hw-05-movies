import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMoveDetails } from '../Api/Api';
import DefaultImg from '../img/imageNotFound.jpg';
import {
  Button,
  Content,
  InfoList,
  InfoItem,
  InfoTitle,
  Image,
  ListAdd,
  ItemAdd,
  LinkAdd,
} from '../styled/styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [moveInfo, setMoveDetails] = useState([]);

  const location = useLocation();
  const buttonBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const infoMoves = async () => {
      try {
        const data = await getMoveDetails(movieId);
        const newMov = data.data;
        setMoveDetails(newMov);
      } catch (error) {
        console.error('error');
      }
    };
    infoMoves();
  }, [movieId]);

  const { poster_path, title, vote_average, genres, overview } = moveInfo;

  return (
    <>
      <Button to={buttonBack.current}>Back to collection</Button>
      <Content>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : DefaultImg
          }
          alt={title}
          width="500"
          height="500"
        />
        <InfoList>
          <InfoItem>
            <InfoTitle>{title}</InfoTitle>
            <p>Users Score: {(vote_average * 10).toFixed(0)}%</p>
          </InfoItem>
          <InfoItem>
            <h2>Overview</h2>
            <p>{overview}</p>
          </InfoItem>
          <InfoItem>
            <h2>Genres</h2>
            {genres && (
              <ul>
                {genres.map((genre, index) => (
                  <li key={index}>{genre.name}</li>
                ))}
              </ul>
            )}
          </InfoItem>
          <hr />
          <h3>Additional information</h3>
          <ListAdd>
            <ItemAdd>
              <LinkAdd to="cast">Cast</LinkAdd>
            </ItemAdd>
            <ItemAdd>
              <LinkAdd to="reviews">Reviews</LinkAdd>
            </ItemAdd>
          </ListAdd>
        </InfoList>
      </Content>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
