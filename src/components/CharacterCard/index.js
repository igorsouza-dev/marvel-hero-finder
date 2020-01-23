import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setCharacter } from 'store/actions';
import { Container } from './styles';

function CharacterCard({ character, size }) {
  const dispatch = useDispatch();
  const history = useHistory();

  function showDetails(selectedCharacter) {
    dispatch(setCharacter(selectedCharacter));
    history.push(`/details/${selectedCharacter.id}`);
  }

  return (
    <Container
      size={size}
      url={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
      onClick={() => showDetails(character)}
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
