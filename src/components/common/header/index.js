import * as React from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import HeaderContainer from './containers';
import Nav, {
  NavBurger,
  NavLink,
  NavLinkActive,
} from './nav';
import Wordmark, {
  HomeImageWrapper,
  HomeLink,
} from './wordmark';


const Header = ({ pageTitle, children }) => {

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
        <NavBurger href="#">
          <StaticImage
            alt="Menu"
            loading="eager"
            src="../../../images/svg/cheeseburger.svg"
          />
        </NavBurger>
        <NavLinkGenerator to={"/about"} label={"About"} active={pageTitle}/>
        <NavLinkGenerator to={"/latest"} label={"Latest"} active={pageTitle}/>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
