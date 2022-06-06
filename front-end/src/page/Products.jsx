import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import datatest from '../util/datatest';

export default function Products() {
  const [products, setProducts] = useState([]);
  console.log(localStorage);
  const getProducts = async () => {
    try {
      const result = await axios.get('http://localhost:3001/customer/products');
      console.log('ffffffff', result.data);
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
      {products.map((product, index) => (
        <div key={ index }>
          <div>
            <div data-testid={ `${datatest[16]}${product.id}` }>
              {product.price.replace('.', ',')}
            </div>
            <div>
              <img
                data-testid={ `${datatest[17]}${product.id}` }
                src={ product.url_image }
                alt={ product.name }
                width={100}
              />
            </div>
          </div>

          <div>
            <div data-testid={ `${datatest[15]}${product.id}` }>
              {product.name}
            </div>
            <div>
              <button
                type="button"
                data-testid={ `${datatest[19]}${product.id}` }
              >
                -
              </button>
              <input
                type="text"
                data-testid={ `${datatest[20]}${product.id}` }
                value={ 0 }
              />
              <button
                type="button"
                data-testid={ `${datatest[18]}${product.id}` }
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
