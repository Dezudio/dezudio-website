import tw, { styled } from 'twin.macro';
import Section, {
  SectionBody,
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

export default Section;
