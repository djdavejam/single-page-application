import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('adds a project and filters it', () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/Title/i), {
    target: { value: 'Test Project' },
  });

  fireEvent.change(screen.getByPlaceholderText(/Description/i), {
    target: { value: 'Test Description' },
  });

  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/Test Project/)).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText(/Search/i), {
    target: { value: 'xyz' },
  });

  expect(screen.queryByText(/Test Project/)).not.toBeInTheDocument();
});
