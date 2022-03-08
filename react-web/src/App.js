import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
//Pages 
import Main from './pages';
//Authorization
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dashboard from './pages/user/dashboard';
//Errors
import NotFoundError from './pages/errors/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/" element={<Main />} />
        <Route exact path="/projects" element={<Main />} />

        <Route exact path="/sign-in" element={<Login />} />
        <Route exact path="/sign-up" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />

        <Route path="/404" element={<NotFoundError />} />
        <Route path="*" element={<Navigate to ="/404" />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// https://reactrouter.com/docs/en/v6/getting-started/overview