export function setCharacters(characters) {
  return {
    type: 'SET_CHARACTERS',
    payload: { characters },
  };
}
export function reset() {
  return {
    type: 'RESET',
    payload: {},
  };
}
export function setCharacter(character) {
  return {
    type: 'SET_CHARACTER',
    payload: { character },
  };
}
