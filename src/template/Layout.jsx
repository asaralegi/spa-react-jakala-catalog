import React from 'react';
import { Link } from "react-router-dom";

function Layout({ children, breadcrumb }) {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-info fixed-top">
            <div id="brand" class="ms-2">
                <a class="navbar-brand" href="/">Dulces Pétalos</a>
            </div>
            <div>
            <nav aria-label="breadcrumb" className="py-2">
                <div className="container">
                    <ol className="breadcrumb">
                        {breadcrumb?.map((item, index) => (
                        <li
                            key={index}
                            className={`breadcrumb-item ${item.active ? "active" : ""}`}
                            aria-current={item.active ? "page" : undefined}
                        >
                            {item.active ? item.label : <Link to={item.path}>{item.label}</Link>}
                        </li>
                        ))}
                    </ol>
                </div>
            </nav>
            </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
