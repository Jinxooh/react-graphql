import React from 'react';
import styled from 'styled-components';
import { media } from 'lib/mediaTemplate';
import { ratingView } from 'lib/common';
import SuggestionItem from '../SuggestionItem';

const MovieDetail = ({ data }) => {
  console.log(data);
  const {
    getMovie: {
      id, title, rating, language, genres,
      large_cover_image: image,
      description_full: content,
    },
    getSuggestions,
  } = data;

  return (
    <React.Fragment>
      <Container>
        <Image src={image} />
        <Explan>
          <Title>{title}</Title>
          <Column>{ratingView(rating)}</Column>
          <Column>{language}</Column>
          <Column>{genres.map(genre => `${genre}, `)}</Column>
          <Column small>{content}</Column>
          <SubTitle>Suggested</SubTitle>
          <Suggestion>
            {getSuggestions.map(suggest =>
              <SuggestionItem
                key={suggest.id}
                id={suggest.id}
                title={suggest.title}
                rating={suggest.rating}
                image={suggest.medium_cover_image}
              />)}
          </Suggestion>
        </Explan>
      </Container>
    </React.Fragment>
  )
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${media.tablet`
    flex-flow: column;
  `}
`;

const Explan = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px;
  display: flex;
  flex-flow: column;
`;

const Suggestion = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageBackground = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 30px;
`

const Image = ImageBackground.withComponent('img').extend`
  width: 100%;
  max-width: 400px;
  height: auto;
  max-height: 600px;
`;

const SubTitle = styled.h2`
`
const Column = styled.div`
  font-size: ${props => (props.small ? "15px" : "20px")};
  font-weight: ${props => (props.bold ? "500" : "400")};
`;

const Title = Column.extend`
  font-size: 35px;
  font-family: 'Righteous', cursive;
`;

export default MovieDetail;
