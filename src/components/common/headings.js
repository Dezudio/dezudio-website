import tw from 'twin.macro';

const Heading = tw.h1`
md:col-end-5
col-start-1 lg:col-start-2
font-sans-black
py-2
row-start-1
text-dezudiorange
text-heading-sm md:text-heading-md lg:text-heading-2xl xl:text-heading-4xl
uppercase
`;

export const SubHeading = tw.h3`
font-condensed-bold
pb-2.5
text-black
text-heading-lg md:text-heading-2xl lg:text-heading-5xl xl:text-heading-6xl
`;

export default Heading;
