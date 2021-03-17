import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders login', () => {
  render(<App />);
  const googleLogin = screen.getByText(/Login with Google/i);
  expect(googleLogin).toBeInTheDocument();
});