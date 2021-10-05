import tw, { css, styled } from 'twin.macro';
import Heading from '../common/headings';

export const HeadingSub = tw.h3`
font-condensed-bold
pb-2.5
text-black
text-heading-lg md:text-heading-2xl lg:text-heading-5xl xl:text-heading-6xl
`;

export const ApproachHeading = styled(Heading)([tw`
sm:pb-8.5 md:pb-11 lg:pb-15 xl:pb-20
`]);

export default Heading;
