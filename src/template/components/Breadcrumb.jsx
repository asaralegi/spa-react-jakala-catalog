import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  return (
    <div>
      <nav aria-label="breadcrumb" className="py-2">
        <div className="container">
          <ol className="breadcrumb">
            {items?.map((item, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${item.active ? 'active' : ''}`}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.active ? item.label : <Link to={item.path}>{item.label}</Link>}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
}

export default Breadcrumb;
