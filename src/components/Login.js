import './Login.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.loginError);

  const handleLogin = () => {
    if (username === 'Catie' && password === 'CFG') {
      dispatch({ type: 'LOGIN_SUCCESS' });
      navigate('/welcome', { state: { username } });
    } else {
      dispatch({ type: 'LOGIN_ERROR' });
      navigate('/login-error');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to Prehistory!</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleLogin}>Login</Button>
        </form>
        {loginError && <p className="error-message">Incorrect username or password</p>}
      </div>
    </div>

  );
};

export default Login;


