import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the thesis title on the home page', () => {
  render(<App />);
  expect(
    screen.getByText(/Multimodal systems and artificial intelligence for the evaluation and improvement of professional training/i)
  ).toBeInTheDocument();
});
