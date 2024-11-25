import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';
import * as api from '../../services/ApiService';

vi.mock('../../services/ApiService'); // Mockea el servicio

describe('HomePage Component', () => {
  const mockProducts = [
    {
      id: 1,
      name: 'Producto 1',
      price: 5,
      imgUrl: 'https://placehold.co/150',
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 10,
      imgUrl: 'https://placehold.co/150',
    },
  ];

  test('Renders Home h1 title', () => {
    render(<HomePage />);

    expect(screen.getByText('Lista de Productos')).toBeInTheDocument();
  });

  test('Renders Products List', async () => {
    api.fetchProducts.mockResolvedValue(mockProducts);

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    // Esperar a que se cargue la lista de productos
    await waitFor(() => {
      expect(screen.getByText('Producto 1')).toBeInTheDocument();
    });
  });
});
