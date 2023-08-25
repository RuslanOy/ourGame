import React from 'react';
import './styles/navbar.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { fetchLogOut } from '../../App/api';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

function NavBar(): JSX.Element {
  const user = useSelector((store: RootState) => store.user.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userScore = useSelector((store: RootState) => store.user.userScore);

  const handleLogOut = async (): Promise<void> => {
    const data = await fetchLogOut();
    if (data.message === 'success') {
      navigate('/');
      dispatch({ type: 'auth/logout' });
    }
  };

  return (
    <>
      <nav className="nav__container">
        <ul className="nav__ul">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/">
              Главная
            </NavLink>
          </li>
          {user ? (
            <>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/game">
              Играть
            </NavLink>
          </li>
          <li>Привет, {user.name}! Твой счет: {userScore}</li>
              <li>
                <button
                  className="nav__btn"
                  type="button"
                  onClick={() => {
                    handleLogOut();
                  }}
                >
                  Выйти
                </button>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
