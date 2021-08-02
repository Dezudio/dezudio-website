import tw, { styled } from 'twin.macro';
import Link from '../links';

export const HomeLink = styled(Link)([tw`
bg-white
hover:bg-dezudiorange
float-left
`]);

export const HomeImageWrapper = tw.div`
float-left
hover:filter hover:brightness-0 hover:invert
py-1
text-nav-sm
`;

const Wordmark = tw.div`
flex-1
`;

export default Wordmark;
