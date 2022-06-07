import React, { useContext } from 'react';
import deliveryContext from '../context/deliveryContext';

export default function Checkout() {
  const { totalValue } = useContext(deliveryContext);

  return (
    <div>{ totalValue }</div>
  );
}
