import { Link } from "react-router-dom";

function Brand() {
  return (
      <div id="brand" className="ms-2">
          <Link to="/" className="navbar-brand">Dulces Pétalos</Link>
      </div>
  );
}

export default Brand;