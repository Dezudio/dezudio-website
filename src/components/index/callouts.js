import tw, { styled } from 'twin.macro';

/* Callouts */
const Callout = tw.div`
bg-white bg-opacity-50
md:col-start-1 lg:col-start-2
md:col-end-5
font-condensed
mt-8 md:mt-12 lg:mt-20 xl:mt-64
px-2.5
py-6
md:row-start-4
w-sm md:w-auto
`;

export const DarkCallout = styled(Callout)([tw`
bg-black-dark bg-opacity-30
text-white
`]);


/* Callout Headings */
export const CalloutHeading = tw.h3`
font-condensed-bold
pb-0.5
text-dezudiorange
text-heading-sm-tight md:text-heading-sm-tighter lg:text-heading-xl xl:text-heading-2xl-tighter
`;


/* Other Callout Components */
export const CalloutP = tw.p`
text-4xs-tight md:text-5xs-tight lg:text-xs-tight xl:text-sm
`;

export default Callout;
