import tw, { styled } from 'twin.macro';
import Section, {
  SectionBody,
} from '../common/sections';

export {
  SectionBody,
  SectionP,
  SectionWrapper,
  SectionWrapperGrey,
  TaglineLinkSection,
} from '../common/sections';

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

export default Section;
