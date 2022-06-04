import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import datatest from '../util/datatest';
import deliveryContext from '../context/deliveryContext';

export default function NavBar() {
  const { nameUser } = useContext(deliveryContext);
  return (
    <nav>
      <div data-testid={ datatest[11] }>
        <Link to="/customer/products">
          Produtos
        </Link>
      </div>
      <div data-testid={ datatest[12] }>
        <Link to="/customer/orders">
          Meus Pedidos
        </Link>
      </div>
      <div data-testid={ datatest[13] }>
        {nameUser}
      </div>
      <div data-testid={ datatest[14] }>
        <Link to="/login">
          Sair
        </Link>
      </div>
    </nav>
  );
}
