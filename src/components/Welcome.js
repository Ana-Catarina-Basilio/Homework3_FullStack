import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
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
    <Router> {/* Use Router component here */}
      <div className="login-container">
        <div className="login-form">
          <h2 className='welcome'>Welcome, {username}!</h2>
          <p className="curiosity"> Here is a curiosity about a stonehenge burial: The Archer wore animal skins fashioned into a cloak and was buried with pottery made locally!</p>
          <img className='Archer'
            src={process.env.PUBLIC_URL + '/Amesbury.jpeg'}
            alt="Amesbury Archer"
          />
          <form>
            <Button onClick={handleLogout}>Logout</Button>
          </form>
        </div>
      </div>
    </Router>
  );
};

export default Welcome;
