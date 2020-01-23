import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CharacterLoader from 'components/CharacterLoader';
import CharacterDetails from 'components/CharacterDetails';
import Page from 'components/Page';

export default function Details() {
  const character = useSelector((state) => state.character);
  const { id } = useParams();
  return (
    <Page>
      {character ? <CharacterDetails character={character} /> : <CharacterLoader characterId={id} />}
    </Page>
  );
}
