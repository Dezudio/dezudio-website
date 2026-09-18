import withClasses from '../withClasses';
import Link from '../common/links';
export {
  BlockLink,
  InlineLink,
  TaglineLink,
} from '../common/links';

export const AboutUsBlockLink = withClasses(Link, `
block
font-sans-reg
text-dezudiorange
text-link-sm
w-sm md:w-auto
md:col-end-13
md:col-start-10
md:-ml-36 lg:-ml-72
my-0
row-start-2 md:row-start-1
text-center md:text-left
md:text-link-sm-loose lg:text-link-base
`);

export const LatestExternalTaglineLink = withClasses('a', `
block
font-sans-reg
text-dezudiorange
text-link-sm
md:col-end-13
my-0
row-start-2
text-center
md:text-link-sm-loose lg:text-link-base
tb:col-start-7 lg:col-start-7
tb:row-start-1
tb:ml-8
tb:text-left
w-37 md:w-auto
`);

export default Link;
