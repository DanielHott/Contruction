import { render, screen } from '@testing-library/react';
import Login from './pages/Login';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Construction Organizer/i);
  expect(linkElement).toBeInTheDocument();
});
