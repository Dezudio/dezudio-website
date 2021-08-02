import tw, { styled } from 'twin.macro';
import Tagline from '../common/taglines';

export const AboutUsTagline = styled(Tagline)([tw`
md:col-end-6 lg:col-end-7
lg:pr-10
md:row-start-2
text-black
lg:text-tagline-2xl
`]);

export const IntroduceYourselfTagline = styled(Tagline)([tw`
col-start-1 md:col-start-3
md:col-end-9
row-start-1
text-black
text-center
text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
`]);

export default Tagline;
