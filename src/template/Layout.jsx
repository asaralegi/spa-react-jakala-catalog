import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
