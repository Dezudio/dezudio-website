import withClasses from '../withClasses';

// xl:tracking-loose keeps the letter-spacing that Tagline's
// xl:text-tagline-xl used to leave behind under the larger font size.
export const LatestTagline = withClasses(
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
col-start-1
row-start-1
text-black
text-center
text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
xl:tracking-loose
tb:col-start-1
tb:col-end-7 md:col-end-7
tb:text-right
tb:mb-0
`
);
