import { produce } from 'immer';

export const INITIAL_STATE = {
  characters: null,
  character: null,
};

export default function reducers(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_CHARACTERS':
        draft.characters = action.payload.characters;
        break;
      case 'SET_CHARACTER':
        draft.character = { ...draft.character, ...action.payload.character };
        break;
      case 'RESET':
        draft.characters = null;
        draft.character = null;
        break;
      default:
    }
  });
}
