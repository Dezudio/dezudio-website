import tw, { styled } from 'twin.macro';
import Link, {
  BlockLink,
} from '../common/links';

export {
  BlockLink,
  TaglineLink,
} from '../common/links';

export const BioBlockLink = styled(BlockLink)([tw`
w-auto
`]);

export default Link;
