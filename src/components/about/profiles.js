import tw from 'twin.macro';

const Profile = tw.div`
text-center
`;

export const ProfilesWrapper = tw.div`
md:col-start-2
md:col-end-13
flex
flex-wrap
gap-x-5 md:gap-x-24 lg:gap-x-52
gap-y-8
row-start-3
`;

export const ProfileName = tw.h2`
mt-2
-mx-5
font-condensed-bold
text-5xs
`;

export const ProfileTitle = tw.h3`
-mx-5
font-condensed
text-5xs
`;

export default Profile;
