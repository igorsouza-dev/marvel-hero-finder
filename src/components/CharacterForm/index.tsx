import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacter, setCharacters } from 'store/actions';
import Character from 'types/Character';
import { Form } from './styles';

interface CharacterFormProps {
  character: Character;
  onSubmit(): void;
}
interface RootState {
  characters: Character[];
}
const CharacterForm: React.FC<CharacterFormProps> = ({
  character,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characters);

  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description || '');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
};
CharacterForm.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default CharacterForm;
