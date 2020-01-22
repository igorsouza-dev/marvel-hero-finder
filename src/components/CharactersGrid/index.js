import React from 'react';
import PropTypes from 'prop-types';

import CharacterCard from 'components/CharacterCard';
import { Grid, Trademark } from './styles';


function CharactersGrid({ characters, cardSize }) {
  return (
    <>
      <Grid size={cardSize}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} size={cardSize} />
        ))}
      </Grid>
      <Trademark>
        Data provided by Marvel. © 2020 Marvel
      </Trademark>
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
