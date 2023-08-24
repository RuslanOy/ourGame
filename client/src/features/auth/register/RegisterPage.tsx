import React, { useState } from 'react';
import './styles/register.scss';

function RegisterPage(): JSX.Element {
  // const [name, setName] = useState('');
  // const [email, setName] = useState('');
  // const [password, setName] = useState('');

  return (
    <div className="auth__container">
    <h1 className="auth__header">Форма регистрации</h1>
    <form className="auth__form">
      <div className="auth__div">
        <label className="auth__label">Имя</label>
        <input
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
