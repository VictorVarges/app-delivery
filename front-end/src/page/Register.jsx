import React, { useState } from 'react';
import { datatest } from '../util/datatest';

const MIN_NUMBER = 6;
const MIN_NAME = 12;

export default function Register() {

  const [inpName, setInpName] = useState('');
  const [inpEmail, setInpEmail] = useState('');
  const [inpPass, setInpPass] = useState('');

  const validRegister = () => {
    const regexEmail = (
      /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    );
    return !(regexEmail.test(inpEmail) && inpPass.length >= MIN_NUMBER && inpName >= MIN_NAME);
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
        onClick={ () => btnLogin() }
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
