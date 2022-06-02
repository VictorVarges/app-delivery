import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { datatest } from '../util/datatest';
import loginUser from '../server/loginFetch';

export default function Login() {
  const [inpLogin, setInpLogin] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  const validLogin = () => {
    const regexEmail = (
      /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    );
    const MIN_NUMBER = 6;
    return !(regexEmail.test(inpLogin) && pass.length >= MIN_NUMBER);
  };

  const btnLogin = () => {
    loginUser(inpLogin, pass);
  };

  const btnNewRegister = () => {
    const redirectToRegister = '/register';
    navigate(redirectToRegister);
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            data-testid={ datatest[1] }
            id="email"
            onChange={ (e) => { setInpLogin(e.target.value); } }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            type="password"
            data-testid={ datatest[2] }
            id="password"
            onChange={ (e) => { setPass(e.target.value); } }
          />
        </label>
        <button
          type="button"
          data-testid={ datatest[3] }
          disabled={ validLogin() }
          onClick={ () => btnLogin() }
        >
          Login
        </button>
        <button
          type="button"
          data-testid={ datatest[4] }
          onClick={ () => btnNewRegister() }
        >
          Ainda não tenho conta
        </button>
      </form>
      <div
        data-testid={ datatest[5] }
      >
        Elemento oculto. (Mensagens de erro)
      </div>
    </div>
  );
}
