import React from 'react';
import s from './Login.module.css'

const LoginForm = (props) => {
  return (
    <form action="">
      <div>
        <input placeholder={"Login"} type="text"/>
      </div>
      <div>
        <input placeholder={"Password"} type="text"/>
      </div>
      <div>
        <input type="checkbox"/>remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm/>
    </div>
  )
}

export default Login;
