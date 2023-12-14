import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import LoginError from './components/LoginError';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login-error" element={<LoginError />} />
      </Routes>
    </Router>
  );
}

export default App; 

