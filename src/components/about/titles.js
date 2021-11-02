import tw from 'twin.macro';

const ProfileTitle = tw.h1`
col-start-3
col-span-full md:col-span-7
font-condensed-bold
text-profile-title-sm tb:text-profile-title-md lg:text-profile-title-lg xl:text-profile-title-xl
pt-5 tb:pt-6.4 md:pt-15 lg:pt-28.1 xl:pt-30
pb-7.5 tb:pb-4.5 md:pb-5.5 lg:pb-11.5 xl:pb-15
`;

export const ProfileTitleSpan = tw.span`
font-condensed
`;

export const OnYourProject = tw.div`
font-condensed-bold
text-bio-head-sm tb:text-bio-head-tb lg:text-bio-head-lg xl:text-bio-head-xl
mb-5
block
`;

export default ProfileTitle;
