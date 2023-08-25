import React, { useState } from 'react';
import './styles/register.scss';
import { useAppDispatch } from '../../../redux/store';

function RegisterPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const onHandleRegisterUser = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = await fetchRegisterUser({ name, email, password, score });
    dispatch({ type: 'user/register', payload: data });
  };

  return (
    <div className="auth__container">
    <h1 className="auth__header">Форма регистрации</h1>
    <form className="auth__form" onSubmit={onHandleRegisterUser}>
      <div className="auth__div">
        <label className="auth__label">Имя</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="auth__input"
          type="text"
          id="name"
          name="name"
          placeholder="Иван Иванов"
        />
      </div>
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
            Зарегистрироваться
      </button>
    </form>
    </div>
  );
}

export default RegisterPage;
