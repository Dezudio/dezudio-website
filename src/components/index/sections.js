import tw, { css, styled } from 'twin.macro';
import Section, {
  SectionBody,
  SectionImage,
  SectionWrapper,
} from '../common/sections';
import ProcessBG from "../../images/brooklyn.jpg";
import ResearchBG from "../../images/reading.jpg";
import WorkshopsBG from "../../images/ashley.jpg";
export {
  InverseSectionP,
  SectionBody,
  SectionImage,
  SectionImageBG,
  SectionP,
  SectionWrapper,
} from '../common/sections';

export const AboutUsSectionBody = styled(SectionBody)([tw`
md:row-start-2
md:col-start-7
md:col-end-12
`]);

export const ApproachSection = styled(Section)([tw`
md:pt-48
`]);

export const ApproachSectionBody = styled(SectionBody)([tw`
md:row-start-2
md:col-start-6 lg:col-start-8
md:col-end-12
`]);

export const BelieveSection = styled(Section)([tw`
pb-16
pt-22
`]);

export const BelieveSectionWrapper = styled(SectionWrapper)([tw`
bg-blue-dark
`]);

export const ClientsSectionBody = styled(SectionBody)([tw`
col-start-1 md:col-start-2 xl:col-start-3
md:col-end-12 xl:col-end-11
row-start-2
text-center
`]);

export const ClientsSectionWrapper = styled(SectionWrapper)([tw`
bg-grey
`]);

export const IntroduceSection = styled(Section)([tw`
pb-24 md:pb-44
pt-22 md:pt-48
`]);

export const PlatformsSectionWrapper = styled(SectionWrapper)([tw`
bg-gradient-to-b from-blue-light to-blue
`]);

export const ProcessSectionWrapper = styled(SectionWrapper)([tw`
bg-cover
bg-grey
bg-no-repeat
bg-right-bottom
`,css`
@media only screen and (min-width: 1024px) {
  background-image:
    linear-gradient(to right, #ffff 20%, #fff0 60%),
    url(${ProcessBG});
}
`]);

export const ResearchSectionWrapper = styled(SectionWrapper)([tw`
bg-cover
bg-grey
bg-no-repeat
bg-right-top
`,css`
@media only screen and (min-width: 1024px) {
  background-image:
    linear-gradient(to right, #ffffffff, #ffffff00 75%),
    url(${ResearchBG});
}
`]);

export const StrategySectionImage = styled(SectionImage)([tw`
xl:col-end-13
xl:col-start-5
xl:py-72
`]);

export const StrategySectionWrapper = styled(SectionWrapper)([tw`
bg-seafoam
`]);

export const SystemsSectionWrapper = styled(SectionWrapper)([tw`
bg-gradient-to-b from-blue-light to-blue
`]);

export const UnderstandingSection = styled(Section)([tw`
pt-20 lg:pt-40
lg:pb-48
`]);

export const UnderstandingSectionBody = styled(SectionBody)([tw`
col-start-1 lg:col-start-1
md:col-end-12 lg:col-end-8 xl:col-end-10
flex
font-condensed-lt
row-start-2
text-2xs md:text-sm-tight lg:text-lg xl:text-xl
text-black
`]);

export const WorkshopsSectionWrapper = styled(SectionWrapper)([tw`
bg-cover
bg-grey-dark
bg-no-repeat
bg-right-bottom
`,css`
@media only screen and (min-width: 1024px) {
  background-image:
    linear-gradient(to right, #ffff 30%, #fff0 60%),
    url(${WorkshopsBG});
}
`]);

export default Section;
