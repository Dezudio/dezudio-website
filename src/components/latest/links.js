import tw, { styled } from 'twin.macro';
import Link, {
  ExternalTaglineLink,
} from '../common/links';

export const LatestExternalTaglineLink = styled(ExternalTaglineLink)([tw`
tb:col-start-7 lg:col-start-7 
tb:row-start-1
tb:ml-8 
tb:text-left
w-37
`]);

export default Link;
