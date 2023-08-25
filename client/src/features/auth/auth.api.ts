import { User } from "./register/types/UserType";


export const fetchRegisterUser = async (user: User): Promise<User> => {
    const res = await fetch('/api/games', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return res.json();
  };