import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function CharacterCard({ character }) {
  return (
    <Container>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <strong>{character.name}</strong>
    </Container>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;
