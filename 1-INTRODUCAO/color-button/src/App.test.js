import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Learn React');
  expect(linkElement).toBeInTheDocument();
});

test('throw and error', () => { 
  throw new Error ('test faiiled'); 
}); 
