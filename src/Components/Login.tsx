import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const signin = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const register = (e: React.ChangeEvent<HTMLInputElement>) => {
  
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>  
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5> 
          <input 
            type='text'
            value={email}
            onChange={ e => setEmail(e.target.value)} 
          /> 

          <h5>Password</h5> 
          <input
            type='password'
            value={password}
            onChange={ e => setPassword(e.target.value)} 
          /> 
          
          <button 
            className='login__signinButton'
            type='submit'
            onSubmit={e => signin}>
              Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to the Amazon CLONE
          Conditions of Use & Sale. Please 
          see our Privacy Notice, our Cookies Notice
          and our Interest-Based Ads Notice. .n
        </p>

        <button 
          className='login__registerButton'
          onClick={e => register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;