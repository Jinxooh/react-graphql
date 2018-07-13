import React from 'react';
import styled from 'styled-components';

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
          <Column>{title}</Column>
          <Column>{rating}</Column>
          <Column>{language}</Column>
          <Column>{id}</Column>
          <Column>{title}</Column>
        </Explan>
      </Container>
      <SubTitle>Suggested</SubTitle>
      <Suggestion>
        {getSuggestions.map(suggest => `${suggest.title} `)}
      </Suggestion>
    </React.Fragment>
  )
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
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
  background-color: white;
  border-radius: 30px;
`

const Image = ImageBackground.withComponent('img');
const SubTitle = styled.h2`
`
const Column = styled.div`
  font-size: 20px;
`;

export default MovieDetail;
