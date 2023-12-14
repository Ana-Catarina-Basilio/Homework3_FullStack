import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from '../components/Welcome';
import store from '../store';  

test('display Welcome component ', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </Provider>
  );

  const welcomeText = getByText(/Welcome/);
  expect(welcomeText).toBeInTheDocument();
});