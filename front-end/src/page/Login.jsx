import React from 'react';

export default function Login() {

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
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            type="password"
            data-testid="common_login__input-password"
            id="password"
          />
        </label>
        <button type="button" data-testid="common_login__button-login">Login</button>
        <button type="button" data-testid="common_login__button-register">Ainda não tenho conta</button>
      </form>
      <div data-testid="common_login__element-invalid-email">Elemento oculto. (Mensagens de erro)</div>
    </div>
  );
}
