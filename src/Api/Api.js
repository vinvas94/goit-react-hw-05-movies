import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '996e01a07f47e64fc2cf01d8ba7bce2b';

export const getMoveTrending = async () => {
  try {
    const fetchLink = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return fetchLink;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    return { error: error.message };
  }
};

export const getMoveName = async searchQuery => {
  try {
    const fetchLink = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );
    return fetchLink;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    return { error: error.message };
  }
};

export const getMoveDetails = async movieId => {
  try {
    const fetchLink = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );
    return fetchLink;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    return { error: error.message };
  }
};

export const getMoveCredits = async movieId => {
  try {
    const fetchLink = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return fetchLink;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    return { error: error.message };
  }
};

export const getMoveReviews = async movieId => {
  try {
    const fetchLink = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return fetchLink;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    return { error: error.message };
  }
};
