import React from 'react';
import { Query } from 'react-apollo';
import { Helmet } from "react-helmet";
import { HOME_PAGE } from './queries';
import MovieList from './components/Home/MovieList';
const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
          if (loading) return <span>loading</span>
          if (error) return <span>error</span>
          if (data) {
            return <MovieList data={data}></MovieList>
          }
          return <span>No data</span>
        }}
      </Query>
    </React.Fragment>
  );
};

export default Home;