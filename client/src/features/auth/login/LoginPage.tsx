import React from 'react';
import './styles/login.scss';

function LoginPage(): JSX.Element {
  return (
    <div className="auth__container">
    <h1 className="auth__header">Форма авторизации</h1>
    <form className="auth__form">
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
            Авторизироваться
      </button>
    </form>
    </div>
  );
}

export default LoginPage;
