import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// Pages 
import Main from './pages';
import Test from './pages/Test';
import NotFoundError from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/test" element={<Test />} />
        <Route path="/404" element={<NotFoundError />} />
        <Route path="*" element={<Navigate to ="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// https://reactrouter.com/docs/en/v6/getting-started/overview