// import { Login } from './pages/Login/Login/'
import React, { useState } from "react";
import BkArrow from '../../components/img/back_arrow.png'
import './Login.css';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log (email);


  }
  return (

      <div className='loginContainer'>
        <div className='header'>
        <a href="Login"><img src={BkArrow} alt="" /></a>
          <h3 className="loginHeader">Login</h3>
          <h3 className="signinHeader">Sign up</h3> 
        </div>

        <form onSubmit = {handleSubmit}>
          <div className='input'>
            <div className='inputItems'>
              <input value= {email} type='email' placeholder='Enter your email'/>
              <input value= {password} type='password' placeholder='Password'/>
            </div>
            <button className="submitButton" type="submit">Login</button>

          </div>

          
        </form>
      </div>
  )
}

export default Login;
