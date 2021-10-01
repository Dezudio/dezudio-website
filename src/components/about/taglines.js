import tw, { styled } from 'twin.macro';
import Tagline from '../common/taglines';

export {
  TaglineBeforeLink,
} from '../common/taglines';

export const AboutUsTagline = styled(Tagline)([tw`
md:col-end-6 lg:col-end-7
lg:pr-10
md:row-start-2
text-black
lg:text-tagline-2xl
`]);

export default Tagline;
