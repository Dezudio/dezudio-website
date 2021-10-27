import tw, { styled } from 'twin.macro';
import Heading  from '../common/headings';

export const SubHeading = styled(Heading)([tw`
pb-6 tb:pb-8 md:pb-11 lg:pb-15 xl:pb-20
`]);

export const CollaboratorsHeading = styled(Heading)([tw`
pb-4 tb:pb-5 lg:pb-7 xl:pb-10
`]);

export default SubHeading;
