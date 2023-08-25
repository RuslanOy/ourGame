import React, { useState } from 'react';
import './styles/login.scss';
import { useAppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router';
import { fetchSignIn } from '../../../App/api';

function LoginPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleSignInUser = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = await fetchSignIn({ email, password });
    console.log(data);
    dispatch({ type: 'user/sign-up', payload: data });
    navigate('/');
  };

  return (
    <div className="auth__container">
    <h1 className="auth__header">Форма авторизации</h1>
    <form className="auth__form" onSubmit={onHandleSignInUser}>
      <div className="auth__div">
        <label className="auth__label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth__input"
          type="email"
          id="email"
          name="email"
          placeholder="Ivan@mail.ru"
        />
      </div>
      <div className="auth__div">
        <label className="auth__label">Пароль</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth__input"
          type="password"
          id="password"
          name="password"
          placeholder="Придумайте пароль"
        />
      </div>
      <button
        className="auth__button"
        type="submit"
      >
            Авторизироваться
      </button>
    </form>
    </div>
  );
}

export default LoginPage;
