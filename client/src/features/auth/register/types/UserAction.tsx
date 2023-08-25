import { User } from './UserType';

export type Action =
    {
        type: 'user/register', payload: User[];
    };
