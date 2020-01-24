import React from 'react';
import PropTypes from 'prop-types';

import CharacterCard from 'components/CharacterCard';
import { Grid } from './styles';

function CharactersGrid({ characters }) {
  return (
    <>
      <Grid>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>
    </>
  );
}

CharactersGrid.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};


export default CharactersGrid;
