import { Action } from '../../features/user/types/Action';
import { State } from '../../features/user/types/State';

const initialState: State = {
  users: undefined,
  userScore: 0,
  userNonSign: undefined,
};

const userReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'user/register':
      return {
        ...state,
        users: action.payload,
      };
    case 'user/sign-up':
    return {
      ...state,
      users: action.payload,
    };
    case 'auth/check':
      return {
        ...state,
        users: action.payload,
      };
    case 'auth/logout':
      return {
        ...state,
        users: undefined,
      };
    case 'user/addScore':
      return {
        ...state,
        userScore: action.payload,

      };
    default:
      return state;
  }
};

export default userReducer;
