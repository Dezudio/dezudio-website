import * as React from 'react';
import Container from './containers';
import Header from './header';
import Footer from './footer';


const Layout = ({ pageTitle, children }) => {
  const fullTitle = pageTitle + " - Dezudio";

  return (
    <main>
      <title>{fullTitle}</title>
      <Header pageTitle={pageTitle}/>
      <Container>
        {children}
      </Container>
      <Footer/>
    </main>
  );
};

export default Layout;
