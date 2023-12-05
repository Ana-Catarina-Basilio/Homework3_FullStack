// src/components/Login.js
import React from 'react';
import './Login.css';
import Button from './Button';  // Correct import statement

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to Prehistory!</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <Button onClick={() => console.log('Login clicked')}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
