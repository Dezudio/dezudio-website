import withClasses from '../withClasses';

const Tagline = withClasses(
  'h3',
  `
tb:col-end-5
col-start-1 lg:col-start-2
font-serif-bold
mb-7 tb:mb-6.5
row-start-2
text-blue-dark
text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-lg xl:text-tagline-xl
`
);

// xl:tracking-loose keeps the letter-spacing that Tagline's
// xl:text-tagline-xl used to leave behind under the larger font size.
export const TaglineBeforeLink = withClasses(
  'h3',
  `
tb:col-end-5
font-serif-bold
mb-7
col-start-1 md:col-start-3
md:col-end-9
row-start-1
text-black
text-center
text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
xl:tracking-loose
tb:mb-0
`
);

export default Tagline;
