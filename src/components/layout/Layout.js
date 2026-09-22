import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

const h1Style = {
  height: '1px',
  left: '-9999px',
  margin: '-1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  width: '1px',
};

const Layout = ({ pageTitle, children }) => (
  <main>
    <h1 style={h1Style}>{`${pageTitle} - Dezudio`}</h1>
    <Header pageTitle={pageTitle} />
    <div className="font-body text-base text-blue-dark">{children}</div>
    <Footer />
  </main>
);

export default Layout;
