import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './ProductPage';
import * as api from '../../services/ApiService';

vi.mock('../../services/ApiService'); // Mockea el servicio

describe('ProductPage Component', () => {
  const mockProduct = {
    id: 1,
    name: 'Producto Ejemplo',
    price: 100,
    imgUrl: 'https://placehold.co/150',
  };

  test('Renders Product h1 title', async () => {
    api.fetchProductById.mockResolvedValue(mockProduct);

    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Comprobar loading state
    expect(screen.queryByText('Producto Ejemplo')).not.toBeInTheDocument();

    // Esperar a que se cargue el producto
    await waitFor(() => {
      expect(screen.getByText('Producto Ejemplo')).toBeInTheDocument();
    });
  });
});
