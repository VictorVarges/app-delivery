import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import datatest from '../util/datatest';

const MIN_NUMBER = 6;
const MIN_NAME = 12;

export default function Register() {
  const [inpName, setInpName] = useState('');
  const [inpEmail, setInpEmail] = useState('');
  const [inpPass, setInpPass] = useState('');
  const navigate = useNavigate();

  const validRegister = () => {
    const regexEmail = (
      /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    );
    return !(
      regexEmail.test(inpEmail)
      && inpPass.length >= MIN_NUMBER
      && inpName.length >= MIN_NAME
    );
  };

  const callBackBackend = async (userEmail, userPassword, userName) => {
    try {
      const result = await axios.post('http://localhost:3001/register', {
        userEmail,
        userPassword,
        userName,
      });
      const { email, password, name } = result.data;
      const user = { email, password, name };
      console.log(user);
      if (result) navigate('/customer/products');
      return user;
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="nome">
          Nome
          <input
            name="nome"
            type="nome"
            data-testid={ datatest[6] }
            id="nome-label"
            onChange={ (e) => { setInpName(e.target.value); } }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            data-testid={ datatest[7] }
            id="email"
            onChange={ (e) => { setInpEmail(e.target.value); } }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            type="password"
            data-testid={ datatest[8] }
            id="password"
            onChange={ (e) => { setInpPass(e.target.value); } }
          />
        </label>
        <button
          type="button"
          data-testid={ datatest[9] }
          disabled={ validRegister() }
          onClick={ () => callBackBackend(inpEmail, inpPass, inpName) }
        >
          CADASTRAR
        </button>
      </form>
      <div
        data-testid={ datatest[10] }
      >
        Elemento oculto. (Mensagens de erro)
      </div>
    </div>
  );
}
