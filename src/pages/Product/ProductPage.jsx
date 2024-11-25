import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/ApiService";
import DetailView from './components/DetailView';

function ProductPage() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const loadProduct = async() => {
        try {
          const data = await fetchProductById(id);
          setProduct(data);
        } catch (err) {
          setError('Error al obtener el detalle del producto');
        }
      }

      loadProduct();
    }, [id]);

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="container mt-4">
        {product && <DetailView product={product} />}
      </div>
    );
  }
  
  export default ProductPage;