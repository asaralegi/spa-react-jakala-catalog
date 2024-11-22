import React from 'react';
import { Link } from "react-router-dom";
import Brand from "./components/Brand";
import Breadcrumb from './components/Breadcrumb';

function Layout({ children, breadcrumb }) {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-info fixed-top">
            <Brand />
            <Breadcrumb items={breadcrumb} />
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
