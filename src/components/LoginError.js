import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './Login.css';

const LoginError = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="login-container"> 
      <div className="login-form"> 
        <h2>Login Unsuccessful</h2>
        <form>
         <h5>Incorrect username or password</h5>
          <Button onClick={handleBackToLogin}>Back to Login</Button>
        </form>
      </div>
    </div>  
  );
};

export default LoginError;
