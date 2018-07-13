import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';

const Home = () => {
  return (
    <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading</span>
      if (error) return <span>error</span>
      if (data) {
        console.log(data);
        return <span>{JSON.stringify(data)}</span>
      }
    }}
    </Query>
  );
};

export default Home;