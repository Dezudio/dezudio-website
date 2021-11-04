import tw from 'twin.macro';

const Profile = tw.div`
text-center
`;

export const ProfilesWrapper = tw.div`

flex
flex-wrap tb:flex-nowrap
sm:flex-col tb:flex-row
justify-around
w-full
//md:col-start-2
//md:col-end-13
//gap-x-5 md:gap-x-24 lg:gap-x-52
//gap-y-6
row-start-3
`;

export const ProfileName = tw.h2`
font-condensed-bold
mt-2
-mx-5
text-5xs md:text-profile-md lg:text-profile-lg xl:text-profile-xl
`;

export const ProfileTitle = tw.h3`
font-condensed
-mx-5
text-5xs md:text-profile-md lg:text-profile-lg xl:text-profile-xl
`;

export default Profile;
