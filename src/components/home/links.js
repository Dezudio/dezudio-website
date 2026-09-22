import withClasses from '../withClasses';
import { Link } from 'gatsby';

export const BlockLink = withClasses(
  Link,
  `
block
font-sans-reg
my-0
text-dezudiorange
text-link-sm md:text-link-md lg:text-heading-lg xl:text-link-xl
w-sm md:w-auto
`
);

export const InlineLink = withClasses(
  Link,
  `
border-b lg:border-b-2
border-dezudiorange
`
);

export const LatestExternalTaglineLink = withClasses(
  'a',
  `
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
`
);
