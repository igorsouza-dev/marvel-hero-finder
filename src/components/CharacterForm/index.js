import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setCharacter, setCharacters } from 'store/actions';
import { Form } from './styles';

function CharacterForm({ character, onSubmit }) {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedCharacter = { ...character, name, description };
    dispatch(setCharacter(updatedCharacter));
    const updatedCharacters = characters.map((char) =>
      char.id === updatedCharacter.id ? updatedCharacter : char
    );
    dispatch(setCharacters(updatedCharacters));
    onSubmit();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <span>Name: </span>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <span>Description: </span>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save</button>
    </Form>
  );
}
CharacterForm.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func,
};
CharacterForm.defaultProps = {
  onSubmit: () => {},
};
export default CharacterForm;
