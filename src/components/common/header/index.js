import React, { useState } from 'react';
import tw, {styled} from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import HeaderContainer from './containers';
import {
  Link,
  NavLinkActive,
} from './nav';
import Wordmark, {
  HomeImageWrapper,
  HomeLink,
} from './wordmark';

const Header = ({ pageTitle, children }) => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  function NavLinkGenerator(props) {
    const active = props.active;
    const to = props.to;
    const label = props.label;
    if (active === label) {
      return <NavLinkActive to={to}>{label}</NavLinkActive>;
    }
    return <NavLink to={to}>{label}</NavLink>;
  }

  return (
    <HeaderContainer>
      <Wordmark>
        <HomeLink to={"/"}>
          <HomeImageWrapper>
            <StaticImage
              alt="Dezudio Wordmark"
              css={tw`w-24 md:w-20 lg:w-32`}
              loading="eager"
              placeholder="none"
              src="../../../images/svg/dezudio.svg"
            />
          </HomeImageWrapper>
        </HomeLink>
      </Wordmark>
      <Nav>

      <NavWrapper menuOpen={menuOpen}>
          <NavBun>
            <NavBurger href="#" menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
              <div/>
              <div/>
              <div/>
            </NavBurger>
          </NavBun>
          <NavLinkGenerator to={"/about"} label={"About"} active={pageTitle}/>
          <NavLinkGenerator to={"/latest"} label={"Latest"} active={pageTitle}/>

    </NavWrapper>
      </Nav>
      <FullNav>
        <NavLinkGenerator to={"/about"} label={"About"} active={pageTitle}/>
        <NavLinkGenerator to={"/latest"} label={"Latest"} active={pageTitle}/>
      </FullNav>
    </HeaderContainer>
  );
};

export default Header;

const FullNav = tw.nav`
md:col-end-13
md:col-start-6
float-right
invisible md:visible
hidden md:block
text-right`;

const Nav = tw.div`
float-right
visible md:invisible
block md:hidden
text-right`

const NavWrapper = styled.nav`
visibility: ${({ menuOpen }) =>
    menuOpen ? "visible" : "hidden"};
`;

const NavBun = tw.div`
visible md:invisible
ml-28
`

const NavBurger = styled.button`
  cursor: pointer;
  visibility: visible;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  z-index: 11;
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ menuOpen }) => (menuOpen ? "#f45d48" : "black")};
        border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;
    :first-of-type {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-of-type(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }
    :nth-of-type(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
`

const NavLink = styled(Link)([tw`
hover:font-sans-bold
ml-6
mt-6 md:mt-0
self-end
text-dezudiorange
text-right
block md:inline
text-nav-sm lg:text-nav-lg xl:text-nav-xl
`]);
