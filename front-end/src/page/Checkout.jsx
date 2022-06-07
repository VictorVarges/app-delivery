import React, { useContext } from 'react';
import deliveryContext from '../context/deliveryContext';
import NavBar from '../components/navbar';
import datatest from '../util/datatest';

export default function Checkout() {
  const { totalCart, myProducts, setMyProducts } = useContext(deliveryContext);

  const deleteItem = (el) => {
    const newArray = myProducts.filter((element) => (element.id !== el.id));
    setMyProducts(newArray);
  };

  console.log(myProducts, 'meeu product');
  console.log(totalCart, 'valor total');
  return (
    <>
      <NavBar />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            myProducts.map((el, index) => (
              <tr key={ index }>
                <td data-testid={ `${datatest[22]}${Number(index)}` }>
                  { Number(index + 1) }
                </td>
                <td data-testid={ `${datatest[23]}${index}` }>{ el.item }</td>
                <td data-testid={ `${datatest[24]}${index}` }>{ el.quantity }</td>
                <td data-testid={ `${datatest[25]}${index}` }>{ el.value }</td>
                <td data-testid={ `${datatest[26]}${index}` }>
                  { Number(el.value * el.quantity).toFixed(2) }
                </td>
                <td data-testid={ `${datatest[27]}${index}` }>
                  <button
                    type="button"
                    onClick={ (
                      () => deleteItem(el)
                    ) }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div data-testid={ datatest[28] }>
        Valor Total: R$
        { ' ' }
        { Number(totalCart).toFixed(2).replace('.', ',') }
      </div>
      <div>
        Detalhes e Endereço para Entrega
        <span>P. Vendedora Responsável</span>
        <select data-testid={ datatest[29] }>
          <option>
            Fulana Pereira
          </option>
        </select>
        <span>Endereço</span>
        <input data-testid={ datatest[30] } type="text" />
        <span>Número</span>
        <input data-testid={ datatest[31] } type="text" />
        <button type="button" data-testid={ datatest[32] }>
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}
