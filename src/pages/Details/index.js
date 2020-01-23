import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterLoader from 'components/CharacterLoader';
import Page from 'components/Page';

export default function Details() {
  const { id } = useParams();
  return (
    <Page>
      <CharacterLoader characterId={id} />
    </Page>
  );
}
