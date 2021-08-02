import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';

export const BlockLink = styled(Link)([tw`
block
font-sans-reg
my-4
text-dezudiorange
text-link-sm
w-sm md:w-auto
`]);

export const ExternalBlockLink = tw.a`
block
font-sans-reg
my-4
text-dezudiorange
text-link-sm
w-sm md:w-auto
`;

export const InlineLink = styled(Link)([tw`
border-b lg:border-b-2
border-dezudiorange
`]);

export default Link;
