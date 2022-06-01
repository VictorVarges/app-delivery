import React from 'react';
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from '../page/Login';

function Routs() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Routs;
