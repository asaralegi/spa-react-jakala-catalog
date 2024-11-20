import { useParams } from "react-router-dom";

function ProductPage() {

    const { id } = useParams();
  
    return (
      <div className="container mt-4">
        <h1 className="mb-4">Product Page {id}</h1>
      </div>
    );
  }
  
  export default ProductPage;