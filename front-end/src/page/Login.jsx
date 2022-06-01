import React from 'react'

export default function Login() {
  return (
    <div> 
    <form>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            data-testid="1"
            id="email"
            //value={ email }
            //onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            type="password"
            data-testid="2"
            id="password"
            //value={ password }
            //onChange={ (event) => setPassword(event.target.value) }
          />
        </label> 
        <button type='button' data-testid='3'>Login</button>
        <button type='button' data-testid='4'>Ainda não tenho conta</button>
      </form>
      <div>Elemento oculto. (Mensagens de erro)</div>
    </div>
  )
}
