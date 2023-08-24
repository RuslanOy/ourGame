import React from 'react';
import './styles/navbar.scss';
import { NavLink, Outlet } from 'react-router-dom';

function NavBar(): JSX.Element {
  return (
    <>
      <nav className="nav__container">
        <ul className="nav__ul">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/game">
              Играть
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/auth/register">
              Регистрация
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/auth/login">
              Авторизация
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/asdfadsf">
              Выйти
            </NavLink>
          </li>
          <li>
            Твой счет:
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
