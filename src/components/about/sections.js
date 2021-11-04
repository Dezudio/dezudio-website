import tw, { styled } from 'twin.macro';
import Section, {
  SectionBody,
  SectionP,
  TaglineLinkSection,
} from '../common/sections';

export {
  SectionBody,
  SectionP,
  SectionWrapper,
  SectionWrapperGrey,
} from '../common/sections';

export const AboutSection = styled(Section)([tw`
tb:grid-cols-10 md:grid-cols-12
sm:py-0
sm:my-15 
tb:mb-20 md:mb-28 lg:mb-37
`]);

export const TeamsSection = styled(Section)([tw`
block
sm:py-0
sm:my-15 
tb:mb-20 md:mb-28 lg:mb-37
`]);

export const AboutSectionP = styled(SectionP)([tw`
sm:mb-5 lg:mb-6 xl:mb-10
`]);

export const AboutUsSectionBody = styled(SectionBody)([tw`
tb:col-start-6 md:col-start-7
tb:col-end-11 md:col-end-12
tb:row-start-2
`]);

export const MeetOurTeamSectionBody = styled(SectionBody)([tw`
w-3/4 md:w-1/2
text-5xs
`]);

export const MeetOurTeamSectionP = styled(SectionP)([tw`
sm:text-3xs lg:text-xs xl:text-base2
mb-6 tb:mb-8 md:mb-11 lg:mb-15 xl:mb-20
`]);

export const ProfileContent = tw.div`
block lg:flex
justify-between
col-start-3 md:col-start-3
col-span-full
ml-0 md:ml-0
`;

export const ProfileMainSection = tw.div`
font-sans-reg
lg:w-60p
`;

export const ProfileSideSection = tw.div`
bg-grey-light
font-sans-reg
text-bio-side-sm lg:text-bio-side-lg xl:text-bio-side-xl
tb:mt-11.5 md:mt-0
p-5
lg:w-37p
`;

export const LatestTaglineLinkSection = styled(TaglineLinkSection)([tw`
tb:grid-cols-9
gap-0
tb:grid-rows-1
items-center
`]);

export const UnorderedList = tw.ul`
list-disc
pl-6
`;

export const UlItem = tw.li`
pb-5
last:pb-2.5
`;

export default Section;
