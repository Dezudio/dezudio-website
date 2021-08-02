import tw, { styled } from 'twin.macro';
import Section, {
  SectionBody,
  SectionWrapper,
} from '../common/sections';
export {
  SectionBody,
  SectionP,
  SectionWrapper,
} from '../common/sections';


export const AboutUsSectionBody = styled(SectionBody)([tw`
md:row-start-2
md:col-start-7
md:col-end-12
`]);

export const IntroduceYourselfSection = styled(Section)([tw`
pb-24 md:pb-44
pt-22 md:pt-48
`]);

export const IntroduceYourselfSectionWrapper = styled(SectionWrapper)([tw`
bg-grey
`]);

export const MeetOurTeamSectionBody = styled(SectionBody)([tw`
md:col-start-1 lg:col-start-2
md:col-end-8
md:row-start-2
text-5xs
`]);

export default Section;
