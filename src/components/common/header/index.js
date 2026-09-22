import React, { useState } from 'react';
import withClasses from '../../withClasses';
import { StaticImage } from 'gatsby-plugin-image';
import HeaderContainer from './containers';
import { Link, NavLinkActive } from './nav';
import Wordmark, { HomeImageWrapper, HomeLink } from './wordmark';

const Header = ({ pageTitle }) => {
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
        <HomeLink to={'/'}>
          <HomeImageWrapper>
            <StaticImage
              alt="Dezudio Wordmark"
              className="w-24 md:w-20 lg:w-32"
              loading="eager"
              placeholder="none"
              src="../../../images/svg/dezudio.svg"
            />
          </HomeImageWrapper>
        </HomeLink>
      </Wordmark>
      <Nav>
        <NavWrapper className={menuOpen ? 'visible' : 'invisible'}>
          <NavBun>
            <button
              className={menuOpen ? 'nav-burger open' : 'nav-burger'}
              href="#"
              onClick={() => toggleMenuOpen(!menuOpen)}
            >
              <div />
              <div />
              <div />
            </button>
          </NavBun>
          <NavLinkGenerator to={'/about'} label={'About'} active={pageTitle} />
          <NavLinkGenerator
            to={'/latest'}
            label={'Latest'}
            active={pageTitle}
          />
        </NavWrapper>
      </Nav>
      <FullNav>
        <NavLinkGenerator to={'/about'} label={'About'} active={pageTitle} />
        <NavLinkGenerator to={'/latest'} label={'Latest'} active={pageTitle} />
      </FullNav>
    </HeaderContainer>
  );
};

export default Header;

const FullNav = withClasses(
  'nav',
  `
md:col-end-13
md:col-start-6
float-right
invisible md:visible
hidden md:block
text-right
`
);

const Nav = withClasses(
  'div',
  `
visible md:invisible
block md:hidden
text-right
relative
`
);

const NavWrapper = withClasses(
  'nav',
  `
absolute
top-10
right-0
`
);

const NavBun = withClasses(
  'div',
  `
visible md:invisible
absolute
top-ex
right-0
`
);

// The burger's look and open state live in src/styles/global.css (.nav-burger).

const NavLink = withClasses(
  Link,
  `
hover:font-sans-bold
ml-6
mt-6 md:mt-0
self-end
text-dezudiorange
text-right
block md:inline
text-nav-sm lg:text-nav-lg xl:text-nav-xl
`
);
