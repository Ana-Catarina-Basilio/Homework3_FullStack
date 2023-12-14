import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';
import './Login.css';

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state && location.state.username;

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
      <div className="login-container"> 
        <div className="login-form">
          <h2 className='welcome'>Welcome, {username}!</h2>
          <p className= "curiosity"> Here is a curiosity about a stonehenge burial: The Archer wore animal skins fashioned into a cloak and was buried with pottery made locally!</p>
          <img className='Archer'
            src={process.env.PUBLIC_URL + '/Amesbury.jpeg'}
            alt="Amesbury Archer"
          />
          <form>
            <Button onClick={handleLogout}>Logout</Button>
          </form>
        </div>
      </div>
  );
};

export default Welcome;
