import tw, { styled } from 'twin.macro';
import Link from '../links';
export { Link };

const Nav = tw.nav`
md:col-end-13
md:col-start-6
float-right
invisible md:visible
text-right
`;

export const NavBurger = tw.a`
visible md:invisible
`;

export const NavLink = styled(Link)([tw`
hover:font-sans-bold
ml-6
mt-6 md:mt-0
self-end
text-dezudiorange
text-left
text-nav-sm lg:text-nav-lg xl:text-nav-xl
`]);

export const NavLinkActive = styled(NavLink)([tw`
font-sans-bold
`]);

export default Nav;
