import withClasses from '../withClasses';
import { Link } from 'gatsby';

export const BioBlockLink = withClasses(
  Link,
  `
block
font-sans-reg
my-0
text-dezudiorange
text-link-sm
w-auto md:w-auto
sm:text-biolink-sm md:text-biolink-md lg:text-biolink-lg xl:text-biolink-xl
tb:pt-2.5
sm:pb-6 tb:pb-0
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
