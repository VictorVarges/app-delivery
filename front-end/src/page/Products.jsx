import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import CardProduct from '../components/CardProduct';
import deliveryContext from '../context/deliveryContext';
import NavBar from '../components/navbar';
import datatest from '../util/datatest';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { totalCart } = useContext(deliveryContext);

  const getProducts = async () => {
    try {
      const result = await axios.get('http://localhost:3001/customer/products');
      setProducts(result.data);
      return result.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBar />
      {
        products.map((element, index) => (
          <CardProduct product={ element } key={ index } />
        ))
      }
      <button type="button">
        Ver Carrinho: R$:
        <span data-testid={ datatest[21] }>
          { Number(totalCart).toFixed(2).replace('.', ',') }
        </span>
      </button>
    </>
  );
}
