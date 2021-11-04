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
} from '../common/sections';

export const LatestSection = styled(Section)([tw`
tb:grid-cols-10 md:grid-cols-12
lg:py-0
`]);

export const LatestSectionBody = styled(SectionBody)([tw`
tb:col-start-6 md:col-start-7
tb:col-end-11 md:col-end-12
tb:row-start-2
`]);

export const LatestSectionP = styled(SectionP)([tw`
sm:mb-5 lg:mb-6 xl:mb-10
`]);

export const LatestTaglineLinkSection = styled(TaglineLinkSection)([tw`
tb:grid-cols-9
gap-0
tb:grid-rows-1
items-center
`]);

export default Section;
