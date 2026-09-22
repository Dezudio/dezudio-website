import withClasses from '../withClasses';
import Tagline from '../common/taglines';

// xl:tracking-loose keeps the letter-spacing that Tagline's
// xl:text-tagline-xl used to leave behind under the larger font size.
export const AboutUsTagline = withClasses(
  'h3',
  `
col-start-1 lg:col-start-2
font-serif-bold
row-start-2
text-tagline-2xs-tight md:text-tagline-xs
xl:tracking-loose
tb:col-end-6 lg:col-end-7
mb-12 tb:mb-6.5
lg:pr-10
md:row-start-2
text-black
lg:text-tagline-2xl
`
);

export const LatestTaglineBeforeLink = withClasses(
  'h3',
  `
font-serif-bold
mb-7
row-start-1
text-black
text-center
text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
xl:tracking-loose
tb:mb-0
col-start-1 md:col-start-3
tb:col-end-7
tb:text-right
`
);

export default Tagline;
