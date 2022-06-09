import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Loading from '../helper/loading';
import datatest from '../util/datatest';

export default function Ordered() {
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const renderOrder = async () => {
    const test = await axios.get('http://localhost:3001/seller/sales');
    // console.log('test', test.data);
    setSales(test.data);
    // console.log('render', sales);
  };

  useEffect(() => {
    console.log('useEffect');
    renderOrder();
  }, []);
  const MAGIC_NUMBER_TEN = 10;
  // const dois = -2;
  // const doze = 10;
  // let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
  /* function FormataStringData(data) {
    const dia = data.split('-')[0];
    const mes = data.split('-')[1];
    const ano = data.split('-')[2];

    return ano + '/' + ("0"+mes).slice(dois) + '/' + ("0"+dia).slice(dois) ;
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }
  // { eachSale.sale_date.replace(/-/g, '/').split('').slice(0, nove) }
*/
  const btnSale = (id) => {
    const redirectToSale = `/seller/orders/${id}`;
    navigate(redirectToSale);
  };

  return (
    <div>
      {
        sales.map((eachSale) => (
          <button
            type="button"
            key={ eachSale.id }
            onClick={ () => btnSale(eachSale.id) }
          >
            <div data-testid={ `${datatest[48]}${eachSale.id}` }>
              { `Pedido ${eachSale.deliveryNumber}` }
            </div>
            <div data-testid={ `${datatest[49]}${eachSale.id}` }>
              { eachSale.status }
            </div>
            <div data-testid={ `${datatest[50]}${eachSale.id}` }>
              { eachSale.saleDate.replace(/-/g, '/').split('').slice(0, MAGIC_NUMBER_TEN) }
            </div>
            <div data-testid={ `${datatest[51]}${eachSale.id}` }>
              { eachSale.totalPrice.replace('.', ',') }
            </div>
            <div data-testid={ `${datatest[52]}${eachSale.id}` }>
              { eachSale.deliveryAddress }
            </div>
          </button>
        ))
      }
    </div>
  );
}
