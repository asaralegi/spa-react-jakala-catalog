import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div id="brand" class="ms-2">
                <a class="navbar-brand" href="/">Dulces Pétalos</a>
            </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
