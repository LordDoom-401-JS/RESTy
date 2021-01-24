import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import Results from './results.js';
import App from  './App.js';
// import Form from './form.js';

test('Renders the count of the results to the page ', ()=> {
  render(<App />);
  const count = screen.getByTestId('count');
  const submitButton = screen.getByTestId('submitButton');
  fireEvent.click(submitButton);
  expect(count).toHaveTextContent(0);
})