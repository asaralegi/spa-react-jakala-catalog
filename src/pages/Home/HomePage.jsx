import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/ApiService';
import ListView from './components/ListView';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Error al obtener la lista de productos');
      }
    };

    loadProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <ListView products={products} />
    </div>
  );
}

export default HomePage;
