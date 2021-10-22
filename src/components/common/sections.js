import tw, { styled } from 'twin.macro';

const Section = tw.section`
auto-rows-min
gap-x-16
grid
grid-cols-1 md:grid-cols-12
grid-rows-none
mx-auto
pb-10 sm:pb-9 md:pb-16 xl:pb-24
pt-10 sm:pt-12 md:pt-20 xl:pt-28
w-sm md:w-md lg:w-lg xl:w-xl
`;

export const SectionBody = tw.div`
md:col-end-5
md:col-start-1 lg:col-start-2
md:row-start-3
text-3xs lg:text-xs xl:text-base-tight
text-blue-dark
`;

export const SectionImage = tw.div`
md:col-end-12
md:col-start-5 xl:col-start-6
my-0 sm:my-12 md:my-0
md:pt-2
md:row-end-7
md:row-start-1
`;

export const SectionImageBG = tw.div`
md:hidden
`;

export const SectionP = tw.p`
mb-10
pb-10 sm:pb-0
md:pr-1 xl:pr-0
`;

export const WhatWeDoSectionP = tw.p`
pb-10 sm:pb-0
md:pr-1 xl:pr-0
min-h-0 sm:min-h-0 md:min-h-md lg:min-h-lg
`;

export const ApproachSectionP = tw.p`
mb-7.5
sm:pb-8.5 lg:pb-10
md:pr-1 xl:pr-0
`;

export const SectionPInverse = styled(SectionP)([tw`
text-white
min-h-0 sm:min-h-0 md:min-h-md lg:min-h-lg
`]);

export const SectionWrapper = tw.div`
clear-both
`;

export const SectionWrapperBlueDark = styled(SectionWrapper)([tw`
bg-blue-dark
`]);

export const SectionWrapperGrey = styled(SectionWrapper)([tw`
bg-grey
`]);

export const SectionWrapperGreyDark = styled(SectionWrapper)([tw`
bg-grey-dark
`]);

export const SectionWrapperSeafoam = styled(SectionWrapper)([tw`
bg-seafoam
`]);

export const TaglineLinkSection = styled(Section)([tw`
pb-24 md:pb-44
pt-22 md:pt-48
`]);

export const UnderstandingSectionP = tw.p`
pb-10 sm:pb-0
md:pr-1 xl:pr-0
`;

export default Section;
