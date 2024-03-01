import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {

const navigate = useNavigate()


const  handleClick = (e) => {


  navigate('/dashboard')
}


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form >
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="button" onClick={handleClick}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
