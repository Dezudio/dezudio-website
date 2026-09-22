import { Link } from 'gatsby';
import withClasses from '../withClasses';

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

export const ExternalBlockLink = withClasses(
  'a',
  `
block
font-sans-reg
my-4
text-dezudiorange
text-link-sm
w-sm md:w-auto
`
);

export const ExternalTaglineLink = withClasses(
  'a',
  `
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
`
);

export const InlineLink = withClasses(
  Link,
  `
border-b lg:border-b-2
border-dezudiorange
`
);

export const TaglineLink = withClasses(
  Link,
  `
block
font-sans-reg
text-dezudiorange
text-link-sm
w-sm md:w-auto
md:col-start-10
md:col-end-13
md:-ml-36 lg:-ml-72
my-0
row-start-2 md:row-start-1
text-center md:text-left
md:text-link-sm-loose lg:text-link-base
`
);

export default Link;
