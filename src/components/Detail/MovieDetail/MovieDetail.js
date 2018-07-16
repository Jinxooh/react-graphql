import React from 'react';
import styled from 'styled-components';
import { media } from '/lib/mediaTemplate';

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
  console.log(data);
  console.log(image);
  return (
    <React.Fragment>
      <Container>
        <Image src={image} />
        <Explan>
          <Column>{id}</Column>
          <Title>{title}</Title>
          <Column>{rating}</Column>
          <Column>{language}</Column>
          <Column>{id}</Column>
          <Column>{title}</Column>
        </Explan>
        <SubTitle>Suggested</SubTitle>
        <Suggestion>
          {getSuggestions.map(suggest => `${suggest.title} `)}
        </Suggestion>
      </Container>
    </React.Fragment>
  )
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

    flex-flow: column;
`;

const Explan = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
`;

const Suggestion = styled.div`
  display: flex;
`;

const ImageBackground = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 30px;
`

const Image = ImageBackground.withComponent('img');
const SubTitle = styled.h2`
`
const Column = styled.div`
  font-size: 20px;
  font-weight: ${props => (props.bold ? "500" : "400")};
`;

const Title = Column.extend`
  font-size: 35px;
  font-family: 'Righteous', cursive;
`;

export default MovieDetail;
