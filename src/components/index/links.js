import tw, { styled } from 'twin.macro';
import Link, {
  BlockLink,
  ExternalTaglineLink,
} from '../common/links';
export {
  BlockLink,
  InlineLink,
  TaglineLink,
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

export const LatestExternalTaglineLink = styled(ExternalTaglineLink)([tw`
tb:col-start-7 lg:col-start-7 
tb:row-start-1
tb:ml-8 
tb:text-left
w-37
`]);

export default Link;
