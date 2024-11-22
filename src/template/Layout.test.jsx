import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Component', () => {
  test('renders header and children', () => {
    render(
        <MemoryRouter>
            <Layout breadcrumb={[{ label: "Inicio", active: true }]}><div>Test Content</div></Layout>
        </MemoryRouter>
    );

    expect(screen.getByText('Dulces Pétalos')).toBeInTheDocument();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});