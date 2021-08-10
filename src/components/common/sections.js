import tw, { styled } from 'twin.macro';


const Section = tw.section`
auto-rows-min
gap-x-16
grid
grid-cols-1 md:grid-cols-12
grid-rows-none
mx-auto
pb-10 md:pb-16 xl:pb-24
pt-10 md:pt-16 xl:pt-28
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
md:pt-2
md:row-end-7
md:row-start-1
`;

export const SectionImageBG = tw.div`
md:hidden
`;

export const SectionP = tw.p`
pb-10
md:pr-1 xl:pr-0
`;
export const InverseSectionP = styled(SectionP)([tw`
text-white
`]);

export const SectionWrapper = tw.div`
clear-both
`;

export default Section;
