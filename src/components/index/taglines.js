import tw, { styled } from 'twin.macro';
import Tagline from '../common/taglines';

export const ApproachTagline = styled(Tagline)([tw`
md:col-end-6 lg:col-end-7
lg:pr-10
md:row-start-2
text-black
lg:text-tagline-2xl
`]);

export const BelieveTagline = styled(Tagline)([tw`
md:col-start-2 lg:col-start-3
md:col-end-11 lg:col-end-10
lg:py-24 xl:py-48
text-center
text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
text-white
`]);

export const ClientsTagline = styled(Tagline)([tw`
md:col-start-2 lg:col-start-3
md:col-end-12	lg:col-end-11
mt-5
md:pb-12 lg:pb-24
row-start-1
text-black
text-center
text-tagline-2xs md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
`]);

export const IntroduceTagline = styled(Tagline)([tw`
col-start-1 md:col-start-3
md:col-end-9
row-start-1
text-black
text-center
text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
`]);

export const PlatformsTagline = styled(Tagline)([tw`
text-white
`]);

export const SystemsTagline = styled(Tagline)([tw`
lg:pb-12
text-white
`]);

export const UnderstandingTagline = styled(Tagline)([tw`
col-start-1 lg:col-start-1
md:col-end-12
mb-5 md:mb-16
row-start-1
text-black
text-tagline-base md:text-tagline-4xl lg:text-tagline-5xl
`]);

export default Tagline;
