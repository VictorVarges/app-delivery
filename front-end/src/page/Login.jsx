import React, { useState } from 'react';
import loginUser from '../server/loginFetch';


export default function Login() {
  const [inpLogin, setInpLogin] = useState('');
  const [pass, setPass] = useState('');

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

  return (
    <div>
      <form>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            data-testid="common_login__input-email"
            id="email"
            onChange={ (e) => { setInpLogin(e.target.value); } }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            type="password"
            data-testid="common_login__input-password"
            id="password"
            onChange={ (e) => { setPass(e.target.value); } }
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ validLogin() }
          onClick={ () => btnLogin() }
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
      <div
        data-testid="common_login__element-invalid-email"
      >
        Elemento oculto. (Mensagens de erro)
      </div>
    </div>
  );
}
