import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './ProductPage';

describe('ProductPage Component', () => {
  test('Renders Product h1 title', () => {
    render(
        <MemoryRouter initialEntries={['/product/123']}>
          <Routes>
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </MemoryRouter>
    );

    expect(screen.getByText('Product Page 123')).toBeInTheDocument();
  });
});