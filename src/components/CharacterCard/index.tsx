import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Character from 'types/Character';
import { setCharacter } from 'store/actions';
import { Container } from './styles';

interface PropsCharacterCard {
  character: Character;
}

const CharacterCard: React.FC<PropsCharacterCard> = ({ character }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  function showDetails(selectedCharacter: Character) {
    dispatch(setCharacter(selectedCharacter));
    history.push(`/details/${selectedCharacter.id}`);
  }

  return (
    <Container url={character.thumbnail} onClick={() => showDetails(character)}>
      <div>
        <strong>{character.name}</strong>
      </div>
    </Container>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default CharacterCard;
