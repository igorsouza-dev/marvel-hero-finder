export function setCharacters(characters) {
  return {
    type: 'SET_CHARACTERS',
    payload: { characters },
  };
}

export function setCharacter(character) {
  return {
    type: 'SET_CHARACTER',
    payload: { character },
  };
}
