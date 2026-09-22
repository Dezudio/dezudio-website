import withClasses from '../withClasses';

const Section = withClasses(
  'section',
  `
auto-rows-min
md:gap-x-16
grid
grid-cols-1 tb:grid-cols-12
grid-rows-none
mx-auto
pt-12 tb:pt-15 md:pt-20 lg:pt-28
pb-9 md:pb-16 xl:pb-24
w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
`
);

export const SectionBody = withClasses(
  'div',
  `
tb:col-end-5
tb:col-start-1 lg:col-start-2
tb:row-start-3
text-3xs lg:text-xs xl:text-base-tight
text-blue-dark
`
);

export const SectionImage = withClasses(
  'div',
  `
tb:col-end-13 md:col-end-12
tb:col-start-6 md:col-start-5 xl:col-start-6
my-0 sm:my-12 md:my-0
md:pt-2
tb:row-end-7
tb:row-start-1
`
);

export const SectionImageBG = withClasses('div', `tb:hidden`);

export const SectionP = withClasses(
  'p',
  `
mb-7.5 md:mb-10
pb-10 sm:pb-0
md:pr-1 xl:pr-0
`
);

export const SectionPInverse = withClasses(
  'p',
  `
mb-7.5 md:mb-10
pb-10 sm:pb-0
md:pr-1 xl:pr-0
text-white
`
);

export const SectionWrapper = withClasses('div', `clear-both`);

export const SectionWrapperBlueDark = withClasses(
  'div',
  `clear-both bg-blue-dark`
);

export const SectionWrapperGrey = withClasses('div', `clear-both bg-grey`);

export const UnderstandingSectionP = withClasses(
  'p',
  `
pb-10 sm:pb-0
md:pr-1 xl:pr-0
`
);

export const AboutUsSectionBody = withClasses(
  'div',
  `
tb:col-end-5
tb:col-start-1
tb:row-start-3
text-3xs lg:text-xs xl:text-base-tight
text-blue-dark
md:row-start-2
md:col-start-7
md:col-end-12
`
);

export const ApproachSection = withClasses(
  'section',
  `
auto-rows-min
md:gap-x-16
grid
grid-cols-1 tb:grid-cols-12
grid-rows-none
mx-auto
pt-12
pb-9
w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
sm:py-12 tb:py-15 md:py-20 lg:py-32 xl:py-40
`
);

export const ApproachSectionBody = withClasses(
  'div',
  `
text-3xs lg:text-xs xl:text-base-tight
text-blue-dark
tb:row-start-2
tb:col-start-7 md:col-start-8 lg:col-start-8
tb:col-end-13 md:col-end-12
`
);

export const ApproachSectionP = withClasses(
  'p',
  `
pb-10
mb-0 md:mb-10
sm:pb-8.5 tb:pb-6 md:pb-7.5 lg:pb-10
pr-0 md:pr-1 xl:pr-0
`
);

export const BelieveSection = withClasses(
  'section',
  `
auto-rows-min
md:gap-x-16
grid-cols-1 tb:grid-cols-12
grid-rows-none
mx-auto
pt-12
pb-9
w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
block md:grid
sm:pt-21.5 tb:pt-17 md:pt-22
sm:pb-21.5 tb:pb-17 md:pb-16
`
);

export const ClientsSectionBody = withClasses(
  'div',
  `
text-3xs lg:text-xs xl:text-base-tight
text-blue-dark
col-start-1 tb:col-start-2 xl:col-start-3
tb:col-end-12 xl:col-end-11
row-start-2 tb:row-start-3
text-center
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

export const PlatformsSectionWrapper = withClasses(
  'div',
  `
clear-both
bg-linear-to-b/srgb from-blue-light to-blue
`
);

// The *-bg classes add each section's photo; see src/styles/global.css.
export const ProcessSectionWrapper = withClasses(
  'div',
  `
clear-both
bg-grey
bg-cover
bg-no-repeat
bg-right-bottom
process-bg
`
);

export const ResearchSectionWrapper = withClasses(
  'div',
  `
clear-both
bg-grey
bg-cover
bg-no-repeat
bg-right-top
research-bg
`
);

export const StrategySectionImage = withClasses(
  'div',
  `
tb:col-end-13
tb:col-start-6 md:col-start-5
my-0 sm:my-12 md:my-0
tb:row-end-7
tb:row-start-1
md:col-end-13
xl:col-start-5
md:py-40.5 lg:py-72
`
);

export const StrategySectionWrapper = withClasses(
  'div',
  `
clear-both
bg-seafoam
`
);

export const SystemsSectionWrapper = withClasses(
  'div',
  `
clear-both
bg-linear-to-b/srgb from-blue-light to-blue
`
);

export const UnderstandingSection = withClasses(
  'section',
  `
auto-rows-min
md:gap-x-16
grid
grid-cols-1 tb:grid-cols-12
grid-rows-none
mx-auto
w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
py-21.5 tb:pt-15 md:py-37 lg:py-40 xl:py-49
`
);

export const UnderstandingSectionBody = withClasses(
  'div',
  `
col-start-1 tb:col-start-1 lg:col-start-1
tb:col-end-8 md:col-end-9 lg:col-end-8 xl:col-end-10
flex
font-condensed-lt
row-start-2 tb:row-start-3
text-2xs tb:text-xs-callout md:text-sm-tight lg:text-lg xl:text-xl
text-black
`
);

export const WhatWeDoSectionP = withClasses(
  'p',
  `
mb-7.5 md:mb-10
pb-10 sm:pb-0
md:pr-1 xl:pr-0
min-h-0 sm:min-h-0 tb:min-h-[450px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[700px]
`
);

export const WhatWeDoSectionPInverse = withClasses(
  'p',
  `
mb-7.5 md:mb-10
pb-10 sm:pb-0
md:pr-1 xl:pr-0
text-white
min-h-0 sm:min-h-0 tb:min-h-[450px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[700px]
`
);

export const WorkshopsSectionWrapper = withClasses(
  'div',
  `
clear-both
bg-grey-dark
bg-cover
bg-no-repeat
bg-right-bottom
workshops-bg
`
);

export default Section;
