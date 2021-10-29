import tw, { styled } from 'twin.macro';
import Tagline, {
  TaglineBeforeLink,
} from '../common/taglines';

export const AboutUsTagline = styled(Tagline)([tw`
md:col-end-6 lg:col-end-7
mb-12
lg:pr-10
md:row-start-2
text-black
lg:text-tagline-2xl
`]);

export const LatestTaglineBeforeLink = styled(TaglineBeforeLink)([tw`
tb:col-start-2 md:col-start-1
tb:col-end-7 md:col-end-7 
tb:text-right
tb:mb-0
`]);

export default Tagline;
