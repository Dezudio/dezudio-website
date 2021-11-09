import tw, { styled } from 'twin.macro';

const Section = tw.section`
auto-rows-min
md:gap-x-16
grid
grid-cols-1 tb:grid-cols-12
grid-rows-none
mx-auto
pt-12 tb:pt-15 md:pt-20 lg:pt-28
pb-9 md:pb-16 xl:pb-24
w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
`;

export const SectionBody = tw.div`
tb:col-end-5
tb:col-start-1 lg:col-start-2
tb:row-start-3
text-3xs lg:text-xs xl:text-base-tight
text-blue-dark
`;

export const SectionImage = tw.div`
tb:col-end-13 md:col-end-12
tb:col-start-6 md:col-start-5 xl:col-start-6
my-0 sm:my-12 md:my-0
md:pt-2
tb:row-end-7
tb:row-start-1
`;

export const SectionImageBG = tw.div`
tb:hidden
`;

export const SectionP = tw.p`
mb-7.5 md:mb-10
pb-10 sm:pb-0
md:pr-1 xl:pr-0
`;

export const SectionPInverse = styled(SectionP)([tw`
text-white
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
items-center
sm:pb-21.5 md:pb-44
sm:pt-21.5 md:pt-48
`]);

export const UnderstandingSectionP = tw.p`
pb-10 sm:pb-0
md:pr-1 xl:pr-0
`;

export default Section;
