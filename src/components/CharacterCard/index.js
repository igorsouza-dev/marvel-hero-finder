import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function CharacterCard({ character, size }) {
  return (
    <Container
      size={size}
      url={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
    >
      <div>
        <strong>{character.name}</strong>
      </div>
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
  size: PropTypes.number,
};

CharacterCard.defaultProps = {
  size: 200,
};

export default CharacterCard;
