import withClasses from '../withClasses';
import Heading from '../common/headings';

export const HeadingSub = withClasses('h3', `
font-condensed-bold
pb-2.5 lg:pb-3.5 xl:pb-4
text-black
text-heading-lg md:text-heading-2xl lg:text-heading-5xl xl:text-heading-6xl
`);

export const ApproachHeading = withClasses('h2', `
tb:col-end-5
col-start-1 lg:col-start-2
font-sans-black
pb-2
row-start-1
text-dezudiorange
text-heading-sm md:text-heading-md lg:text-heading-2xl xl:text-heading-3bxl
uppercase
lg:tracking-loose xl:tracking-normal
sm:pb-8.5 tb:pb-8 md:pb-11.5 lg:pb-15 xl:pb-20
`);

export default Heading;
