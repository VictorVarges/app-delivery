import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import deliveryContext from '../context/deliveryContext';
import datatest from '../util/datatest';
import { addToCart, removeToCart } from '../util/myCart';

export default function CardProduct({ product }) {
  const [totalValue, setTotalValue] = useState(0);
  const {
    totalCart,
    setTotalCart,
    myProducts,
    setMyProducts,
  } = useContext(deliveryContext);

  const handleValue = ({ target }) => {
    if (totalValue < 0) return setTotalValue(0);

    setTotalValue(Number(target.value));
    setTotalCart((totalCart + (target.value * Number(product.price))));
  };

  const cartNegative = (param) => {
    if (totalValue !== 0) {
      setTotalValue(totalValue - 1);
      setTotalCart((totalCart - Number(product.price)));
    }

    removeToCart(param, myProducts, setMyProducts);
  };

  const cartPositive = (param) => {
    setTotalValue(totalValue + 1);
    setTotalCart((totalCart + Number(product.price)));

    addToCart(param, myProducts, setMyProducts);
  };

  return (
    <div>
      <div>
        <div data-testid={ `${datatest[16]}${product.id}` }>
          {product.price.replace('.', ',')}
        </div>
        <div>
          <img
            data-testid={ `${datatest[17]}${product.id}` }
            src={ product.url_image }
            alt={ product.name }
            width={ 100 }
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
            onClick={ () => cartNegative({
              id: product.id,
              item: product.name,
              value: product.price,
            }) }
          >
            -
          </button>
          <input
            type="text"
            data-testid={ `${datatest[20]}${product.id}` }
            value={ totalValue }
            onChange={ handleValue }
          />
          <button
            type="button"
            data-testid={ `${datatest[18]}${product.id}` }
            onClick={ () => cartPositive({
              id: product.id,
              item: product.name,
              value: product.price,
              quantity: 1,
            }) }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
};
