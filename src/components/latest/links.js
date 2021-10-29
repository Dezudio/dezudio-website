import tw, { styled } from 'twin.macro';
import Link, {
  ExternalTaglineLink,
} from '../common/links';

export const LatestExternalTaglineLink = styled(ExternalTaglineLink)([tw`
tb:col-start-6
justify-self-start
tb:row-start-1
tb:ml-8
tb:text-left
`]);

export default Link;
