import React from 'react';

export default function Login() {

  return (
    <div>
      <form>
        <label htmlFor='email'>
          Email
          <input
            name='email'
            type='email'
            data-testid='1'
            id='email'
          />
        </label>
        <label htmlFor='password'>
          Senha
          <input
            name='password'
            type='password'
            data-testid='2'
            id='password'
          />
        </label>
        <button type='button' data-testid='3'>Login</button>
        <button type='button' data-testid='4'>Ainda não tenho conta</button>
      </form>
      <div data-testid='5'>Elemento oculto. (Mensagens de erro)</div>
    </div>
  )
}
