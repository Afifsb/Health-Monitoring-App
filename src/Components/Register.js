import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';


const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <label htmlFor="fullName">Full Name:</label> 
        <input type="text" id="fullName" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="submit">Register</button>
      </form>
      <div className="register-link">
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
