import { Action } from '../../features/auth/register/types/UserAction';
import { State } from '../../features/auth/register/types/UserState';

const initialState: State = {
  users: [],
};

const userReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'user/register':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
