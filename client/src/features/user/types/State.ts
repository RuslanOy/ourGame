import { User, UserScore, UserSign } from './types';

export type State = {
  userScore: UserScore;
  users: User | undefined;
  userNonSign: UserSign | undefined;
};
