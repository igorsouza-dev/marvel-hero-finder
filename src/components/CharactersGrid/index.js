import React from 'react';
import PropTypes from 'prop-types';

import CharacterCard from 'components/CharacterCard';
import Trademark from 'components/Trademark';
import { Grid } from './styles';

function CharactersGrid({ characters, cardSize }) {
  return (
    <>
      <Grid size={cardSize}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} size={cardSize} />
        ))}
      </Grid>
      <Trademark />
    </>
  );
}

CharactersGrid.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  cardSize: PropTypes.number,
};

CharactersGrid.defaultProps = {
  cardSize: 200,
};

export default CharactersGrid;
