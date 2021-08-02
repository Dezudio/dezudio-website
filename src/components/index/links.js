import tw, { styled } from 'twin.macro';
import Link, { BlockLink } from '../common/links';
export {
  BlockLink,
  InlineLink
} from '../common/links';

export const AboutUsBlockLink = styled(BlockLink)([tw`
md:col-end-13
md:col-start-10
md:-ml-36 lg:-ml-72
my-0
row-start-2 md:row-start-1
text-center md:text-left
md:text-link-sm-loose lg:text-link-base
`]);

export default Link;
