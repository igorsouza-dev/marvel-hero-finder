import React from 'react';
import PropTypes from 'prop-types';

import CharacterCard from 'components/CharacterCard';
import { Grid, Content, InfoText } from './styles';

function CharactersGrid({ characters }) {
  return (
    <>
      {characters.length ? (
        <Grid>
          {characters.map((character) => (
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
}

CharactersGrid.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};


export default CharactersGrid;
