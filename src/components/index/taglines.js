import withClasses from '../withClasses';
import Tagline from '../common/taglines';

// Several taglines below add xl:tracking-loose. It keeps the letter-spacing
// that Tagline's xl:text-tagline-xl used to leave behind when these
// overrode only the font size.

export const ApproachTagline = withClasses('h3', `
col-start-1 lg:col-start-2
font-serif-bold
row-start-2
text-tagline-2xs-tight
xl:tracking-loose
tb:col-end-6 md:col-end-8 lg:col-end-7
lg:pr-10
md:row-start-2
mb-12 tb:mb-6.5
text-black
md:text-tagline-lg lg:text-tagline-2xl
`);

export const BelieveTagline = withClasses('h3', `
tb:col-end-5
col-start-1
font-serif-bold
mb-7
row-start-2
md:col-start-2 lg:col-start-3
md:col-end-11 lg:col-end-10
sm:mb-0
lg:py-24 xl:py-48
text-center
text-tagline-sm tb:text-tagline-tb2 md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
text-white
xl:tracking-loose
`);

export const ClientsTagline = withClasses('h3', `
col-start-1
font-serif-bold
mb-7 tb:mb-6.5
xl:tracking-loose
tb:col-start-2 lg:col-start-3
tb:col-end-12 lg:col-end-11
mt-5
md:pb-12 lg:pb-24
row-start-1
text-black
text-center
text-tagline-2xs md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
`);

export const LatestTaglineBeforeLink = withClasses('h3', `
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
`);

export const PlatformsTagline = withClasses('h3', `
tb:col-end-5
col-start-1 lg:col-start-2
font-serif-bold
row-start-2
text-tagline-2xs-tight md:text-tagline-xs
xl:tracking-loose
text-white
lg:text-tagline-lg2
mb-5.5 tb:mb-6.5 md:mb-6.5 lg:mb-8.4 xl:mb-10.5
`);

export const SystemsTagline = withClasses('h3', `
tb:col-end-5
col-start-1 lg:col-start-2
font-serif-bold
mb-7 tb:mb-6.5
row-start-2
text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-lg xl:text-tagline-xl
lg:pb-12
text-white
`);

export const UnderstandingTagline = withClasses('h3', `
col-start-1 lg:col-start-1
font-serif-bold
tb:col-end-12
mb-5 tb:mb-6.5 md:mb-16 lg:mb-21
row-start-1
text-black
text-tagline-base tb:text-tagline-tb md:text-tagline-4xl lg:text-tagline-5xl
xl:tracking-loose
`);

export default Tagline;
