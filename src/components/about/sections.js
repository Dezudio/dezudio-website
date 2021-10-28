import tw, { styled } from 'twin.macro';
import Section, {
  SectionBody,
  SectionP,
} from '../common/sections';

export {
  SectionBody,
  SectionP,
  SectionWrapper,
  SectionWrapperGrey,
  TaglineLinkSection,
} from '../common/sections';

export const AboutSection = styled(Section)([tw`
sm:py-0
sm:my-15 
md:mb-28 lg:mb-37
`]);

export const AboutSectionP = styled(SectionP)([tw`
md:mb-5 lg:mb-6 xl:mb-10
`]);

export const AboutUsSectionBody = styled(SectionBody)([tw`
md:col-start-7
md:col-end-12
md:row-start-2
`]);

export const MeetOurTeamSectionBody = styled(SectionBody)([tw`
md:col-start-1 lg:col-start-2
md:col-end-8
md:row-start-2
text-5xs
`]);

export const MeetOurTeamSectionP = styled(SectionP)([tw`
md:text-3xs lg:text-xs xl:text-base2
mb-6 tb:mb-8 md:mb-11 lg:mb-15 xl:mb-20
`]);

export const ProfileMainSection = tw.div`
bg-red-50
`;

export const ProfileSideSection = tw.div`
bg-blue-50
`;

export default Section;
