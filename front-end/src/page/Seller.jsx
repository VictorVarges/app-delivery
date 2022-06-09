import React from 'react';
import NavBar from '../components/navbar';
import Ordered from '../components/Ordered';

export default function Orders() {
  return (
    <>
      <NavBar />
      <h1>Meus Pedidos</h1>
      <Ordered />
    </>
  );
}
