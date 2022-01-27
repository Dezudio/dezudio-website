import tw, { styled } from 'twin.macro';
import Tagline, {
  TaglineBeforeLink,
} from '../common/taglines';

export const ApproachTagline = styled(Tagline)([tw`
tb:col-end-6 md:col-end-8 lg:col-end-7
lg:pr-10
md:row-start-2
mb-12
text-black
md:text-tagline-lg lg:text-tagline-2xl
`]);

export const BelieveTagline = styled(Tagline)([tw`
md:col-start-2 lg:col-start-3
md:col-end-11 lg:col-end-10
sm:mb-0
lg:py-24 xl:py-48
text-center
text-tagline-sm tb:text-tagline-tb2 md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
text-white
xl:tracking-loose
`]);

export const ClientsTagline = styled(Tagline)([tw`
tb:col-start-2 lg:col-start-3
tb:col-end-12	lg:col-end-11
mt-5
md:pb-12 lg:pb-24
row-start-1
text-black
text-center
text-tagline-2xs md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
`]);

export const LatestTaglineBeforeLink = styled(TaglineBeforeLink)([tw`
tb:col-start-1
tb:col-end-7 md:col-end-7 
tb:text-right
tb:mb-0
`]);

export const PlatformsTagline = styled(Tagline)([tw`
text-white
lg:text-tagline-lg2
mb-5.5 md:mb-6.5 lg:mb-8.4 xl:mb-10.5
`]);

export const SystemsTagline = styled(Tagline)([tw`
lg:pb-12
text-white
`]);

export const UnderstandingTagline = styled(Tagline)([tw`
col-start-1 lg:col-start-1 
tb:col-end-12
mb-5 md:mb-16 lg:mb-21
row-start-1
text-black
text-tagline-base tb:text-tagline-tb md:text-tagline-4xl lg:text-tagline-5xl
`]);


export default Tagline;
