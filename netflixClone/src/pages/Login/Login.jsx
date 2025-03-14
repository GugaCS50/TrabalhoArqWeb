import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'

const Login = () => {
  const [signState, setSignState] = useState("Entrar");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event)=>{
    event.preventDefault();
    if(signState==="Entrar"){
      await login(email, password);
    }else{
      await signup(name, email, password);
    }
  }

  return (
    <div className='login'>
      <img src={logo} alt='' className='login_logo' />
      <div className="login_form">
        <h1>{signState}</h1>
        <form>
          {signState==="Cadastre-se"?<input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Nome'/>:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Email'/>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Senha'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form_help">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor=''>Lembrar senha</label>
            </div>
            <p>Precisa de Ajuda?</p>
          </div>
        </form>
        <div className="form_switch">
          {signState==="Entrar"?<p>Novo na Netflix? <span onClick={()=>{setSignState("Cadastre-se")}}>Cadastre-se agora!</span></p>:<p>Já tem conta? <span onClick={()=>{setSignState("Entrar")}}>Entre</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
