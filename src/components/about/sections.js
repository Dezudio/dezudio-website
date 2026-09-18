import withClasses from '../withClasses';
import Section from '../common/sections';

export {
  SectionBody,
  SectionP,
  SectionWrapper,
  SectionWrapperGrey,
} from '../common/sections';

export const AboutSection = withClasses('section', `
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
`);

export const TeamsSection = withClasses('section', `
auto-rows-min
md:gap-x-16
grid-cols-1 tb:grid-cols-12
grid-rows-none
mx-auto
pt-12
pb-9
w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
block
sm:py-0
sm:my-15
tb:mb-20 md:mb-28 lg:mb-37
`);

export const AboutSectionP = withClasses('p', `
mb-7.5
pb-10 sm:pb-0
md:pr-1 xl:pr-0
sm:mb-5 lg:mb-6 xl:mb-10
`);

export const AboutUsSectionBody = withClasses('div', `
text-3xs lg:text-xs xl:text-base-tight
text-blue-dark
tb:col-start-6 md:col-start-7
tb:col-end-11 md:col-end-12
tb:row-start-2
`);

export const MeetOurTeamSectionBody = withClasses('div', `
tb:col-end-5
tb:col-start-1 lg:col-start-2
tb:row-start-3
text-blue-dark
w-3/4 md:w-1/2
text-5xs lg:text-xs xl:text-base-tight
`);

export const MeetOurTeamSectionP = withClasses('p', `
pb-10 sm:pb-0
md:pr-1 xl:pr-0
sm:text-3xs lg:text-xs xl:text-base2
mb-6 tb:mb-8 md:mb-11 lg:mb-15 xl:mb-20
`);

export const ProfileContent = withClasses('div', `
block lg:flex
justify-between
col-start-3 md:col-start-3
col-span-full
ml-0 md:ml-0
`);

export const ProfileMainSection = withClasses('div', `
font-serif-reg
lg:w-60p
`);

export const ProfileMainSectionP = withClasses('p', `
mb-7.5
pb-10 sm:pb-0
md:pr-1 xl:pr-0
tb:mb-4.5 md:mb-10
`);

export const ProfileSideSection = withClasses('div', `
bg-grey-light
font-sans-reg
text-bio-side-sm lg:text-bio-side-lg xl:text-bio-side-xl
tb:mt-11.5 md:mt-0
p-5
lg:w-37p
`);

export const LatestTaglineLinkSection = withClasses('section', `
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
`);

export const UnorderedList = withClasses('ul', `
list-disc
pl-6
`);

export const UlItem = withClasses('li', `
pb-5
last:pb-2.5
`);

export default Section;
