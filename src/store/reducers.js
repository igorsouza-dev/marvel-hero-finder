import { produce } from 'immer';

const INITIAL_STATE = {
  characters: [],
  character: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_CHARACTERS':
        draft.characters = action.payload.characters;
        break;
      case 'SET_CHARACTER':
        draft.character = action.payload.character;
        break;

      default:
    }
  });
}
