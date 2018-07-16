import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ratingView } from 'lib/common';

const MovieItem = ({
  id, title, rating, image, onClick
}) => {
  return (
    <Link to={`/details/${id}`}>
      <Container>
        <Background image={image} />
        <Title>{title}</Title>
        <Column>Rating: {ratingView(rating)}</Column>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  margin: 10px;
  flex-flow: column;
  align-content: center;
  justify-content: center;
  width: 230px;
  height: 400px;
  box-sizing: border-box;
`
const Background = styled.div`
  width: 230px;
  height: 345px;
  background: url(${props => props.image});
  border-radius: 10px;
`;

const Column = styled.div`
  height: 20px;
  font-size: 18px;
  color: white;
  padding: 2px 5px;
`;

const Title = Column.extend`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


MovieItem.propTypes = {

};

MovieItem.defaultProps = {
  title: 'No title',
}
export default MovieItem;
