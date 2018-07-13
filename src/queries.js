import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  query {
    getMovies(limit: 50, rating: 3) {
      id
      title
      rating
      genres
    }
  }
`;
