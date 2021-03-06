import React from 'react';
import styled from 'styled-components';
import MovieItem from '../MovieItem';

const MovieList = ({
  data
}) => {
  const { getMovies: movies } = data;
  return (
    <Container>
      {movies.map(movie =>
        <MovieItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          image={movie.medium_cover_image}
        />)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default MovieList;