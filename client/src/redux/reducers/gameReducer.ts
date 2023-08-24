import { Action } from '../../features/game/types/Action';
import { State } from '../../features/game/types/State';

const initialState: State = {
  questions: [],
};

const gameReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'game/load':
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
