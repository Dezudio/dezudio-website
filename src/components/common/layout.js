import * as React from 'react';
import Container from './containers';
import Header from './header';
import Footer from './footer';

const h1Style = {
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  width: "1px"
}

const Layout = ({ pageTitle, children }) => {
  const fullTitle = pageTitle + " - Dezudio";

  return (
    <main>
      <h1 style={h1Style}>{fullTitle}</h1>
      <Header pageTitle={pageTitle}/>
      <Container>
        {children}
      </Container>
      <Footer/>
    </main>
  );
};

export default Layout;