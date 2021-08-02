import tw from 'twin.macro';


const Section = tw.section`
col-span-2
w-sm
`;

export const CopyrightSection = tw.section`
col-span-3
col-start-1    lg:col-start-2
pb-0           lg:pb-36
text-footer-sm lg:text-footer-base
`;

export const SocialImagesWrapper = tw.div`
flex
space-x-7 lg:space-x-12
`;

export const SocialSection = tw.section`
col-span-3
pb-4 lg:pb-0
`;

export const WordmarkSection = tw.section`
col-span-2
col-start-1 lg:col-start-2
`;

export default Section;
