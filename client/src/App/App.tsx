import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import GamePage from '../features/game/GamePage';

import NavBar from '../features/navbar/NavBar';
import RegisterPage from '../features/auth/register/RegisterPage';
import LoginPage from '../features/auth/login/LoginPage';
import { fetchQuestions } from './api';
import { useAppDispatch } from '../redux/store';
import MainPage from '../features/main/MainPage';
import Error from '../features/404/Error';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const loadQuestions = async (): Promise<void> => {
    const data = await fetchQuestions();

    dispatch({ type: 'game/load', payload: data });
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
