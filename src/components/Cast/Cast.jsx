import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoveCredits } from '../../Api/Api';
import { CastList, CastItem } from '../../styled/styled';
import DefaultImg from '../../img/imageNotFound.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCats, setMoveCredits] = useState([]);

  useEffect(() => {
    const fetchMoveCredits = async () => {
      try {
        const response = await getMoveCredits(movieId);
        if (response && response.data && response.data.cast) {
          setMoveCredits(response.data.cast);
        } else {
          setMoveCredits([]);
        }
      } catch (error) {
        console.error('error:', error);
        setMoveCredits([]);
      }
    };
    fetchMoveCredits();
  }, [movieId]);

  if (!movieCats || movieCats.length === 0) {
    return <h2>I'm sorry, but I don't have any information casts</h2>;
  }

  return (
    <CastList>
      {movieCats.map(({ id, profile_path, character, name }) => (
        <CastItem key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : DefaultImg
            }
            alt={name}
            width="150"
            height="auto"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
