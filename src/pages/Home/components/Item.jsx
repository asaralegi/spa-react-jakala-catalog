import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div className="card h-100">
      <img
        src={product.imgUrl}
        className="card-img-top"
        alt={product.name}
        style={{ objectFit: 'cover', height: '150px' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">
          <em>{product.binomialName}</em>
        </p>
        <p className="card-text fw-bold">{product.price.toFixed(2)}€</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary mt-2">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
