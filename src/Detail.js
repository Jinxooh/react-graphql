import React from 'react';
import { Query } from 'react-apollo';
import { DETAIL_PAGE } from './queries';

const Detail = ({ match }) => {
  console.log(match);
  return (
    <div>
      Detail
    </div>
  );
};

export default Detail;