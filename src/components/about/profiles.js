import * as React from 'react';

const profileTextClassName = `
  -mx-5
  text-5xs md:text-profile-md lg:text-profile-lg xl:text-profile-xl
`;

export const teamProfileImageClassName = `
  profileImage
  h-headshot-sm md:h-headshot-md lg:h-headshot-lg xl:h-headshot-xl
  rounded-full
  w-headshot-sm md:w-headshot-md lg:w-headshot-lg xl:w-headshot-xl
`;

export const bioProfileImageClassName = `
  tb:col-span-2 tb:justify-self-end md:justify-self-start
  row-span-2
  tb:mr-5 md:mr-0
  h-bio-headshot-sm tb:h-bio-headshot-tb md:h-bio-headshot-md lg:h-bio-headshot-lg xl:h-bio-headshot-xl
  rounded-full
  w-bio-headshot-sm tb:w-bio-headshot-tb md:w-bio-headshot-md lg:w-bio-headshot-lg xl:w-bio-headshot-xl
`;

const Profile = ({ children }) => <div className="text-center">{children}</div>;

export const ProfilesWrapper = ({ children }) => (
  <div className="flex flex-wrap tb:flex-nowrap sm:flex-col tb:flex-row justify-around w-full row-start-3">
    {children}
  </div>
);

export const ProfileName = ({ children }) => (
  <h2 className={`${profileTextClassName} font-condensed-bold mt-2`}>
    {children}
  </h2>
);

export const ProfileTitle = ({ children }) => (
  <h3 className={`${profileTextClassName} font-condensed`}>{children}</h3>
);

export default Profile;
