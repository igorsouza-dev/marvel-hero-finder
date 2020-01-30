import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CharacterLoader from 'components/CharacterLoader';
import CharacterDetails from 'components/CharacterDetails';
import PageContainer from 'components/PageContainer';
import Character from 'types/Character';

interface RootState {
  character: Character;
}
type TParams = { id: string | undefined };
const Details: React.FC = () => {
  const character = useSelector((state: RootState) => state.character);
  const { id } = useParams<TParams>();
  return (
    <PageContainer>
      {character ? (
        <CharacterDetails character={character} />
      ) : (
        <CharacterLoader characterId={id} />
      )}
    </PageContainer>
  );
};

export default Details;
