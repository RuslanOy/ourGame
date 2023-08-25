
import { Action } from '../../features/auth/register/types/UserAction';
import { State } from '../../features/auth/register/types/UserState';

const initialState: State = {
  users: [],

import { Action } from '../../features/user/types/Action';
import { State } from '../../features/user/types/State';

const initialState: State = {
  userScore: 0,

};

const userReducer = (state = initialState, action: Action): State => {
  switch (action.type) {

    case 'user/register':
      return {
        ...state,
        users: action.payload,

    case 'user/addScore':
      return {
        ...state,
        userScore: state.userScore + action.payload,

      };
    default:
      return state;
  }
};

export default userReducer;
