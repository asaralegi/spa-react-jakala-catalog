import { Link } from 'react-router-dom';

function DetailView({ product }) {
    const fertilizerTypes = new Map([
        ['nitrogen', 'Nitrogenado'],
        ['phosphorus', 'Fosforado'],
    ]);    

    return (
      <div>
        <div className="row align-items-center mb-4">
          {/* Título */}
          <div className="col-md-9">
            <h1 className="m-0">{product.name}</h1>
          </div>

          {/* Botón Atras */}
          <div className="col-md-3">
            <Link to={`/`} className="btn btn-info mt-2">Atrás</Link>
          </div>
        </div>

        <div className="row">
            {/* Imagen */}
            <div className="col-md-6 mb-4">
            <img
                src={product.imgUrl}
                alt={product.name}
                className="img-fluid rounded shadow"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            </div>

            {/* Descripción */}
            <div className="col-md-6 mb-4">
            <h2 className="mb-3">Detalles del Producto</h2>
            <ul className="list-unstyled">
                <li>
                <strong>Nombre Científico:</strong> {product.binomialName}
                </li>
                <li>
                <strong>Precio:</strong> {product.price.toFixed(2)}€
                </li>
                <li>
                <strong>Riegos por semana:</strong> {product.wateringsPerWeek}
                </li>
                <li>
                <strong>Fertilizante recomendado:</strong> {fertilizerTypes.get(product.fertilizerType)}
                </li>
                <li>
                <strong>Altura:</strong> {product.heightInCm}cm
                </li>
            </ul>
            </div>
        </div>
      </div>
    );
}
  
export default DetailView;