import React from 'react';
import styled from 'styled-components';
import { ratingView } from 'lib/common';
import { Link } from 'react-router-dom';

const SuggestionItem = ({ id, rating, title, image }) => (
  <Link to={`/details/${id}`}>
    <img src={image} />
    <div>{title}</div>
    <div>{ratingView(rating)}</div>
  </Link>
);

SuggestionItem.propTypes = {

};

export default SuggestionItem;
