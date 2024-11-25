function Image({ product }) {
    return (
        <img
            src={product.imgUrl}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
    );
}
  
export default Image;