import withClasses from '../../withClasses';
import Link from '../links';
export { Link };

const Nav = withClasses('nav', `
md:col-end-13
md:col-start-6
float-right
invisible md:visible
text-right
`);

export const NavBurger = withClasses('a', `
visible md:invisible
`);

export const NavLink = withClasses(Link, `
hover:font-sans-bold
ml-6
mt-6 md:mt-0
self-end
text-dezudiorange
text-left
text-nav-sm lg:text-nav-lg xl:text-nav-xl
`);

export const NavLinkActive = withClasses(Link, `
hover:font-sans-bold
ml-6
mt-6 md:mt-0
self-end
text-dezudiorange
text-left
text-nav-sm lg:text-nav-lg xl:text-nav-xl
font-sans-bold
`);

export default Nav;
