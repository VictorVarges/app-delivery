import React from 'react';
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from '../page/Login';
import Register from '../page/Register';
import Products from '../page/Products';
import Orders from '../page/Orders';
import Checkout from '../page/Checkout';
import OrdersDetails from '../page/OrdersDetails';

function Routs() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/customer/orders" element={ <Orders /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders/:id" element={ <OrdersDetails /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Routs;
