import tw, { styled } from 'twin.macro';
import Link, {
  BlockLink,
  ExternalTaglineLink,
} from '../common/links';

export {
  BlockLink,
  TaglineLink,
} from '../common/links';

export const BioBlockLink = styled(BlockLink)([tw`
w-auto
md:text-biolink-md lg:text-biolink-lg xl:text-biolink-xl
pt-5
`]);

export const LatestExternalTaglineLink = styled(ExternalTaglineLink)([tw`
xl:col-start-9
`]);

export default Link;
