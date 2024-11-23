import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/ApiService';

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
        <h1 className="mb-4">Home Page</h1>

        <div>
            <ul>
                {products.map((product) => (
                <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
      </div>
    );
  }
  
  export default HomePage;