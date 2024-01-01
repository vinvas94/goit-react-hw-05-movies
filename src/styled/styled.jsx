import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

// Colores

const primaryColor = '#007bff';
const secondaryColor = '#6c757d';
const backgroundColor = '#f8f9fa';
const textColor = '#343a40';

// Cast
export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CastItem = styled.li``;

// Layout
export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  background-color: ${backgroundColor};
`;

export const Header = styled.header`
  background-color: ${primaryColor};
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  padding: 25px;
`;

export const Item = styled.li`
  margin-left: 30px;
  padding: 10px;
  border: 1px solid ${backgroundColor};
  border-radius: 10px;
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  color: ${backgroundColor};
`;

export const Main = styled.main`
  padding: 20px;
`;

// Reviews
export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 5px;
`;

export const Author = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${textColor};
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${secondaryColor};
`;

// Home
export const FilmList = styled.ul`
  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const FilmItem = styled.li``;

export const FilmLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    cursor: zoom-in;
  }
`;

export const Name = styled.p`
  padding: 8px;
  color: ${primaryColor};
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

// Movies Details
export const Top = styled.div`
  display: block;
  height: 50px;
`;

export const Button = styled(Link)`
  display: inline-block;
  border: 1px solid ${primaryColor};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  text-decoration: none;
  color: ${textColor};
  font-weight: 500;
`;

export const Content = styled.div`
  display: flex;
`;

export const Image = styled.img`
  display: flex;
`;

export const InfoList = styled.ul`
  list-style: none;
`;

export const InfoItem = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px;
  height: auto;
`;

export const InfoTitle = styled.h1`
  font-size: 35px;
  color: ${textColor};
  margin: 0;
`;

export const ListAdd = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const ItemAdd = styled.li`
  margin-right: 20px;
`;

export const LinkAdd = styled(Link)`
  text-decoration: none;
  display: inline-block;
  border: 1px solid ${primaryColor};
  padding: 10px;
  border-radius: 5px;
  width: 80px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${primaryColor};
`;

// Movies
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: ${textColor};
`;

export const Form = styled.form`
  text-align: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 450px;
  height: 30px;
  border: 2px solid ${primaryColor};
  border-radius: 5px;
  margin-right: 15px;
`;

export const Btn = styled.button`
  display: inline-block;
  width: 100px;
  height: 30px;
  background-color: ${primaryColor};
  border-radius: 5px;
  border-color: ${primaryColor};
  color: ${backgroundColor};
  font-size: 16px;
  &:hover {
    background-color: ${backgroundColor};
    color: ${primaryColor};
  }
`;
