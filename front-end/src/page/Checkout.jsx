import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import deliveryContext from '../context/deliveryContext';
import NavBar from '../components/navbar';
import datatest from '../util/datatest';

export default function Checkout() {
  const {
    totalCart,
    myProducts,
    setMyProducts,
    setTotalCart,
  } = useContext(deliveryContext);
  const [sellers, setSellers] = useState([]);
  const [mySeller, setMySeller] = useState('');
  const [myAdress, setMyAdress] = useState('');
  const [myAdressNumber, setMyAdressNumber] = useState('');
  const navigate = useNavigate();

  const deleteItem = (el) => {
    const newArray = myProducts.filter((element) => (element.id !== el.id));
    if (newArray.length === 0) setTotalCart(0);
    const result = newArray.map((element) => {
      const subTotal = element.quantity * element.value;

      return subTotal;
    });

    const totalCartValue = result.reduce((acc, crr) => acc + crr);

    setTotalCart(totalCartValue);
    setMyProducts(newArray);
  };
  const checkoutOrder = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const myOrder = await axios.post('http://localhost:3001/seller/sales', {
        user,
        mySeller,
        myAdress,
        myAdressNumber,
        totalCart,
      }, {
        headers: {
          Authorization: user.token,
        },
      });
      const { id } = myOrder.data;
      setMyProducts([]);
      setTotalCart(0);

      navigate(`/customer/orders/${id}`);
      console.log('-->', myOrder.data);
      return myOrder;
    } catch (error) {
      console.log('deu ruim');
      console.error(error);
    }
  };

  const getSellers = async () => {
    const seller = await axios.get('http://localhost:3001/users');
    const mySeler = seller.data.filter((el) => el.role === 'seller');

    setSellers([...mySeler]);

    return sellers;
  };

  const selectSeller = (target) => {
    setMySeller(target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getSellers(), []);

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
                <td data-testid={ `${datatest[25]}${index}` }>
                  { Number(el.value).toFixed(2).replace('.', ',') }
                </td>
                <td data-testid={ `${datatest[26]}${index}` }>
                  { Number(el.value * el.quantity).toFixed(2).replace('.', ',') }
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
      <div>
        Valor Total: R$
        { ' ' }
        <p data-testid={ datatest[28] }>
          { Number(totalCart).toFixed(2).replace('.', ',') }
        </p>
      </div>
      <div>
        Detalhes e Endereço para Entrega
        <span>P. Vendedora Responsável</span>
        <select
          data-testid={ datatest[29] }
          onChange={ ({ target }) => selectSeller(target) }
        >
          <option value="vendedor">Selecione um Vendedor</option>
          {
            sellers.map((el, index) => (
              <option
                key={ index }
                value={ el.id }
              >
                { el.name }
              </option>
            ))
          }
        </select>
        <span>Endereço</span>
        <input
          data-testid={ datatest[30] }
          type="text"
          onChange={ ({ target }) => setMyAdress(target.value) }
        />
        <span>Número</span>
        <input
          data-testid={ datatest[31] }
          type="text"
          onChange={ ({ target }) => setMyAdressNumber(target.value) }
        />
        <button
          type="button"
          data-testid={ datatest[32] }
          onClick={ () => checkoutOrder() }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}
