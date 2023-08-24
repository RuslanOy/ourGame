import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App():JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/registration" element={<RegistrationPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
