import React from 'react';
import PropTypes from 'prop-types';

import CharacterCard from 'components/CharacterCard';
import Character from 'types/Character';
import { Grid, Content, InfoText } from './styles';

interface CharactersGridProps {
  characters: Character[];
}

const CharactersGrid: React.FC<CharactersGridProps> = ({ characters }) => (
  <>
    {characters.length ? (
      <Grid>
        {characters.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>
    ) : (
      <Content>
        <InfoText>No characters found.</InfoText>
      </Content>
    )}
  </>
);

CharactersGrid.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharactersGrid;
