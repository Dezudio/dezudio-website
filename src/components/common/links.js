import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';

export const BlockLink = styled(Link)([tw`
block
font-sans-reg
my-0
text-dezudiorange
text-link-sm xl:text-link-xl
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

export const ExternalTaglineLink = styled(ExternalBlockLink)([tw`
md:col-end-13
md:col-start-10
md:-ml-36 lg:-ml-72
my-0
row-start-2 md:row-start-1
text-center md:text-left
md:text-link-sm-loose lg:text-link-base
`]);

export const InlineLink = styled(Link)([tw`
border-b lg:border-b-2
border-dezudiorange
`]);

export const TaglineLink = styled(BlockLink)([tw`
md:col-end-13
md:col-start-10
md:-ml-36 lg:-ml-72
my-0
row-start-2 md:row-start-1
text-center md:text-left
md:text-link-sm-loose lg:text-link-base
`]);

export default Link;
