import tw, { styled } from 'twin.macro';

const Tagline = tw.h2`
md:col-end-5
col-start-1 lg:col-start-2
font-serif-bold
mb-7 md:mb-6.5
row-start-2
text-blue-dark
text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-lg xl:text-tagline-xl
`;

export const TaglineBeforeLink = styled(Tagline)([tw`
col-start-1 md:col-start-3
md:col-end-9
row-start-1
text-black
text-center
text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
`]);

export default Tagline;
