import withClasses from '../withClasses';

const Profile = withClasses('div', `
text-center
`);

export const ProfilesWrapper = withClasses('div', `
flex
flex-wrap tb:flex-nowrap
sm:flex-col tb:flex-row
justify-around
w-full
row-start-3
`);

export const ProfileName = withClasses('h2', `
font-condensed-bold
mt-2
-mx-5
text-5xs md:text-profile-md lg:text-profile-lg xl:text-profile-xl
`);

export const ProfileTitle = withClasses('h3', `
font-condensed
-mx-5
text-5xs md:text-profile-md lg:text-profile-lg xl:text-profile-xl
`);

export default Profile;
