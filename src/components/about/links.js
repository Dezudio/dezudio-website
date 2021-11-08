import tw, { styled } from 'twin.macro';
import Link, {
  BlockLink,
  ExternalTaglineLink,
} from '../common/links';

export {
  BlockLink,
} from '../common/links';

export const BioBlockLink = styled(BlockLink)([tw`
w-auto
sm:text-biolink-sm md:text-biolink-md lg:text-biolink-lg xl:text-biolink-xl
tb:pt-2.5
sm:pb-6 tb:pb-0
`]);

export const LatestExternalTaglineLink = styled(ExternalTaglineLink)([tw`
tb:col-start-7 lg:col-start-7 
tb:row-start-1
tb:ml-8 
tb:text-left
w-37
`]);

export default Link;
