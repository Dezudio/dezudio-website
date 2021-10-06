import tw, { styled } from 'twin.macro';

const Callout = tw.div`
bg-white bg-opacity-50
md:col-start-1 lg:col-start-2
md:col-end-5
font-condensed
p-2 md:p-2.5 lg:p-4
md:row-start-4
w-sm md:w-auto
`;

export const CalloutHeading = tw.h3`
font-condensed-bold
pb-1.5
text-dezudiorange
text-heading-sm-tight md:text-heading-sm-tighter lg:text-heading-xl xl:text-heading-2xl-tighter
`;

export const CalloutP = tw.p`
text-4xs-tight md:text-5xs-tight lg:text-xs-tight xl:text-sm
`;

export const CalloutDark = styled(Callout)([tw`
bg-black-dark bg-opacity-30
text-white
`]);

export default Callout;