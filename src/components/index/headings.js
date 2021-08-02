import tw, { styled } from 'twin.macro';
import Heading from '../common/headings';

export { SubHeading } from '../common/headings';

export const ApproachHeading = styled(Heading)([tw`
lg:pb-20
`]);

export const PlatformsHeading = styled(Heading)([tw`
md:pt-10 lg:pt-28
`]);

export const SystemsHeading = styled(Heading)([tw`
lg:pb-15
lg:pt-32
`]);

export default Heading;
