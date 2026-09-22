import withClasses from '../withClasses';
import Section from '../common/sections';

export { SectionBody, SectionP, SectionWrapper } from '../common/sections';

export const LatestSection = withClasses(
  'section',
  `
auto-rows-min
md:gap-x-16
grid
grid-cols-1
grid-rows-none
mx-auto
pt-12
pb-9
w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
tb:grid-cols-10 md:grid-cols-12
sm:py-0
sm:my-15 tb:my-20
md:mb-28 lg:mb-37
`
);

export const LatestSectionBody = withClasses(
  'div',
  `
text-3xs lg:text-xs xl:text-base-tight
text-blue-dark
tb:col-start-6 md:col-start-7
tb:col-end-11 md:col-end-12
tb:row-start-2
`
);

export const LatestSectionP = withClasses(
  'p',
  `
mb-7.5
pb-10 sm:pb-0
md:pr-1 xl:pr-0
sm:mb-5 lg:mb-6 xl:mb-10
`
);

export const LatestTaglineLinkSection = withClasses(
  'section',
  `
auto-rows-min
grid
grid-cols-1
grid-rows-none
mx-auto
pt-12
pb-9
w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
sm:pb-21.5 md:pb-44
sm:pt-21.5 md:pt-48
tb:grid-cols-9
gap-0 md:gap-x-16
tb:grid-rows-1
items-center
`
);

export default Section;
