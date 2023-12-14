
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginError from '../components/LoginError';

test('renders LoginError component and handles back to login', () => {
  const { getByText } = render(
    <Router>
      <LoginError />
    </Router>
  );

  const errorMessage = getByText(/Incorrect username or password/i);
  expect(errorMessage).toBeInTheDocument();

  
  const backButton = getByText(/Back to Login/i);
  fireEvent.click(backButton);

});
