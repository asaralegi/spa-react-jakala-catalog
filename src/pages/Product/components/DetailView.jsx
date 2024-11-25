import { Link } from 'react-router-dom';
import Image from './Image';
import Description from './Description';

function DetailView({ product }) {
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
                <Image product={product} />
            </div>

            {/* Descripción */}
            <div className="col-md-6 mb-4">
                <Description product={product} />
            </div>
        </div>
      </div>
    );
}
  
export default DetailView;