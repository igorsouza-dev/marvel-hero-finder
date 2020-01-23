import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setCharacter } from 'store/actions';
import { Form } from './styles';

function CharacterForm({ character, onSubmit }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setCharacter({
      name, description,
    }));
    onSubmit();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <span>Name: </span>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <span>Description: </span>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Save</button>
    </Form>
  );
}
CharacterForm.propTypes = {
  character: PropTypes.shape(
    {
      name: PropTypes.string,
      description: PropTypes.string,
    },
  ).isRequired,
  onSubmit: PropTypes.func,
};
CharacterForm.defaultProps = {
  onSubmit: () => { },
};
export default CharacterForm;
