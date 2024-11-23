import { useState } from 'react';
import Item from './Item';

function ListView({ products }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter((product) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.binomialName.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    return (
      <div>
        <div className="row align-items-center mb-4">
          {/* Título */}
          <div className="col-md-9">
            <h1 className="m-0">Lista de Productos</h1>
          </div>

          {/* Barra de búsqueda */}
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <Item product={product} />
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-muted">No se encontraron productos.</p>
          )}
        </div>
      </div>
    );
}
  
export default ListView;  