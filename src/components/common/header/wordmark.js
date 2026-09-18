import withClasses from '../../withClasses';
import Link from '../links';

export const HomeLink = withClasses(Link, `
bg-white
hover:bg-dezudiorange
float-left
`);

export const HomeImageWrapper = withClasses('div', `
float-left
hover:brightness-0 hover:invert
py-1
text-nav-sm
`);

const Wordmark = withClasses('div', `
flex-1
`);

export default Wordmark;
