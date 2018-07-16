import React from 'react';
import { Query } from 'react-apollo';
import { DETAIL_PAGE } from './queries';
import { Helmet } from "react-helmet";

import Loading from 'lib/Loading';
import MovieDetail from './components/Detail/MovieDetail';

const Detail = ({
  match:
    { params: { movieId }}
  }) => {
  return (
    <Query query={DETAIL_PAGE} variables={{ movieId }}>
      {({ loading, data, error }) => {
        if (loading) return (
          <React.Fragment>
            <Helmet>
              <title>Loading</title>
            </Helmet>
            <Loading />
          </React.Fragment>
        )

        if (error) return <span>Error occurs</span>
        if (data) {
          return (
            <React.Fragment>
              <Helmet>
                <title>Detail</title>
              </Helmet>
              <MovieDetail data={data} />
            </React.Fragment>
          );
          // return <span>{JSON.stringify(data)}</span>
        }
        return <span>No data</span>
      }}
    </Query>
  );
};

export default Detail;