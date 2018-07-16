import React from 'react';
import styled from 'styled-components';
import { ratingView } from 'lib/common';
import { Link } from 'react-router-dom';

const SuggestionItem = ({ id, rating, title, image }) => (
  <Link to={`/details/${id}`}>
    <Container>
      <Image src={image} />
      <Title>{title}</Title>
      <div>{ratingView(rating)}</div>
    </Container>
  </Link>
);

const Container = styled.div`
  margin: 0 5px;
`;

const ImageBackground = styled.div`
  padding: 3px;
  background-color: white;
  border-radius: 10px;
`

const Title = styled.div`
  margin: 0 2px;
  font-size: 15px;
  font-family: 'Righteous', cursive;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 130px;
  height: 20px;
`

const Image = ImageBackground.withComponent('img').extend`
  width: 100%;
  max-width: 140px;
  height: auto;
  max-height: 200px;
`;

SuggestionItem.propTypes = {

};

export default SuggestionItem;
