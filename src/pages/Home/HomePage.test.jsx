import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage Component', () => {
  test('Renders Home h1 title', () => {
    render(<HomePage />);

    expect(screen.getByText('Lista de Productos')).toBeInTheDocument();
  });
});