import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CharacterLoader from 'components/CharacterLoader';
import { TopContainer, Back, Container } from './styles';

export default function Details() {
  const history = useHistory();
  const { id } = useParams();
  return (
    <Container>
      <TopContainer>
        <Back onClick={() => history.goBack()}>Go back</Back>
      </TopContainer>
      <CharacterLoader characterId={id} />
    </Container>
  );
}
