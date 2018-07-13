import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  query {
    getMovies(limit: 50, rating: 3) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

export const DETAIL_PAGE = gql`
  query getMovieDetails($movieId: Int!) {
    getMovie(id: $movieId) {
      id
      title
      rating
      language
      description_full
      large_cover_image
      genres
    }
    getSuggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
