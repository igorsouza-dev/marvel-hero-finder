import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Searcher from 'components/Searcher';
import PageContainer from 'components/PageContainer';
import CharactersGrid from 'components/CharactersGrid';
import Character from 'types/Character';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}
interface RootState {
  characters: Character[];
}
const Search: React.FC = () => {
  const characters = useSelector((state: RootState) => state.characters);
  const query = useQueryParams();
  const input = query.get('q');
  return (
    <PageContainer>
      {characters ? (
        <CharactersGrid characters={characters} />
      ) : (
        <Searcher input={input || ''} />
      )}
    </PageContainer>
  );
};

export default Search;
