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
mb-6 tb:mb-8 md:mb-11 lg:mb-15 xl:mb-20
`]);
export default Section;
