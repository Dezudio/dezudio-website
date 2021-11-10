import tw, { css, styled } from 'twin.macro';
import Section, {
  SectionBody,
  SectionImage,
  SectionP,
  SectionPInverse,
  SectionWrapper,
  SectionWrapperGrey,
  SectionWrapperGreyDark,
  TaglineLinkSection,
} from '../common/sections';
import ProcessBG from "../../images/brooklyn.jpg";
import ResearchBG from "../../images/reading.jpg";
import WorkshopsBG from "../../images/ashley.jpg";
export {
  SectionPInverse,
  SectionBody,
  SectionImage,
  SectionImageBG,
  SectionP,
  SectionWrapper,
  SectionWrapperBlueDark,
  SectionWrapperGrey,
  SectionWrapperGreyDark,
  SectionWrapperSeafoam,
  UnderstandingSectionP,
} from '../common/sections';

export const AboutUsSectionBody = styled(SectionBody)([tw`
md:row-start-2
md:col-start-7
md:col-end-12
`]);

export const ApproachSection = styled(Section)([tw`
sm:py-12 tb:py-15 md:py-20 lg:py-32 xl:py-40
`]);

export const ApproachSectionBody = styled(SectionBody)([tw`
tb:row-start-2
tb:col-start-7 md:col-start-8 lg:col-start-8
tb:col-end-13 md:col-end-12
`]);

export const ApproachSectionP = styled(SectionP)([tw`
mb-0
sm:pb-8.5 tb:pb-6 md:pb-7.5 lg:pb-10
pr-0
`]);

export const BelieveSection = styled(Section)([tw`
block md:grid
sm:pt-21.5 tb:pt-17 md:pt-22
sm:pb-21.5 tb:pb-17 md:pb-16
`]);

export const ClientsSectionBody = styled(SectionBody)([tw`
col-start-1 tb:col-start-2 xl:col-start-3
tb:col-end-12 xl:col-end-11
row-start-2
text-center
`]);

export const LatestTaglineLinkSection = styled(TaglineLinkSection)([tw`
tb:grid-cols-9
gap-0
tb:grid-rows-1
items-center
`]);

export const PlatformsSectionWrapper = styled(SectionWrapper)([tw`
bg-gradient-to-b from-blue-light to-blue
`]);

export const ProcessSectionWrapper = styled(SectionWrapperGrey)([tw`
bg-cover
bg-no-repeat
bg-right-bottom
`,css`
@media only screen and (min-width: 640px) {
  background-image:
    linear-gradient(to right, #ffffffed 20%, #fff0 60%),
    url(${ProcessBG});
}
`]);

export const ResearchSectionWrapper = styled(SectionWrapperGrey)([tw`
bg-cover
bg-no-repeat
bg-right-top
`,css`
@media only screen and (min-width: 640px) {
  background-image:
    linear-gradient(to right, #ffffffff, #ffffff00 75%),
    url(${ResearchBG});
}
`]);

export const StrategySectionImage = styled(SectionImage)([tw`
md:col-end-13
xl:col-start-5
md:py-40.5 lg:py-72
`]);

export const StrategySectionWrapper = styled(SectionWrapper)([tw`
bg-seafoam
`]);

export const SystemsSectionWrapper = styled(SectionWrapper)([tw`
bg-gradient-to-b from-blue-light to-blue
`]);

export const UnderstandingSection = styled(Section)([tw`
grid
py-21.5 md:py-37 lg:py-40 xl:py-49
`]);

export const UnderstandingSectionBody = styled(SectionBody)([tw`
col-start-1 lg:col-start-1
tb:col-end-8 md:col-end-9 lg:col-end-8 xl:col-end-10
flex
font-condensed-lt
row-start-2
text-2xs tb:text-xs-callout md:text-sm-tight lg:text-lg xl:text-xl
text-black
`]);

export const WhatWeDoSectionP = styled(SectionP)([tw`
pb-10 sm:pb-0
md:pr-1 xl:pr-0
min-h-0 sm:min-h-0 tb:min-h-tb md:min-h-md lg:min-h-lg xl:min-h-xl
`]);

export const WhatWeDoSectionPInverse = styled(SectionPInverse)([tw`
min-h-0 sm:min-h-0 tb:min-h-tb md:min-h-md lg:min-h-lg xl:min-h-xl
`]);

export const WorkshopsSectionWrapper = styled(SectionWrapperGreyDark)([tw`
bg-cover
bg-no-repeat
bg-right-bottom
`,css`
@media only screen and (min-width: 640px) {
  background-image:
    linear-gradient(to right, #fffffff7 30%, #fff0 60%),
    url(${WorkshopsBG});
}
`]);

export default Section;
