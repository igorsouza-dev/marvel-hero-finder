import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Searcher from 'components/Searcher';
import PageContainer from 'components/PageContainer';
import CharactersGrid from 'components/CharactersGrid';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const characters = useSelector((state) => state.characters);
  const query = useQueryParams();
  const input = query.get('q');
  return (
    <PageContainer>
      {characters.length ? (
        <CharactersGrid characters={characters} />
      ) : (
        <Searcher input={input} />
      )}
    </PageContainer>
  );
}
