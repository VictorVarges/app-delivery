import React from 'react';
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from '../page/Login';
import Register from '../page/Register';
import Products from '../page/Products';
import Orders from '../page/Orders';

function Routs() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/customer/orders" element={ <Orders /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Routs;
