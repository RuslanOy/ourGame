import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import GamePage from '../features/game/GamePage';

import NavBar from '../features/navbar/NavBar';
import RegisterPage from '../features/auth/register/RegisterPage';
import LoginPage from '../features/auth/login/LoginPage';


function App():JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          {/* <Route path="/" element={<MainPage />} />*/}
          <Route path="/game" element={<GamePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
