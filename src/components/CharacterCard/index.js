import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

function CharacterCard({ character, size }) {
  const history = useHistory();
  return (
    <Container
      size={size}
      url={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
      onClick={() => history.push(`/details/${character.id}`)}
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.number,
};

CharacterCard.defaultProps = {
  size: 200,
};

export default CharacterCard;
