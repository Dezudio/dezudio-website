import tw, { styled } from 'twin.macro';
import Section, {
  SectionBody,
  SectionP,
} from '../common/sections';

export {
  SectionBody,
  SectionP,
  SectionWrapper,
  TaglineLinkSection,
} from '../common/sections';

export const LatestSection = styled(Section)([tw`
lg:py-0
`]);

export const LatestSectionBody = styled(SectionBody)([tw`
md:col-start-7
md:col-end-12
md:row-start-2
`]);

export const LatestSectionP = styled(SectionP)([tw`
sm:mb-5 lg:mb-6 xl:mb-10
`]);

export default Section;
