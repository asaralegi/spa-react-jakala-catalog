import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Component', () => {
  test('renders header and children', () => {
    render(<Layout><div>Test Content</div></Layout>);

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});