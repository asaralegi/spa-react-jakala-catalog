import Item from './Item';

function ListView({ products }) {
    return (
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <Item product={product} />
          </div>
        ))}
      </div>
    );
}
  
export default ListView;  