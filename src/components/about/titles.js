import * as React from 'react';

const profileTitleClassName = `
  col-start-3 col-span-full
  font-condensed-bold
  text-profile-title-sm tb:text-profile-title-md lg:text-profile-title-lg xl:text-profile-title-xl
  pt-5 tb:pt-6.4 md:pt-15 lg:pt-28.1 xl:pt-30
  pb-7.5 tb:pb-4.5 md:pb-5.5 lg:pb-11.5 xl:pb-15
`;

const onYourProjectClassName = `
  font-condensed-bold
  text-bio-head-sm tb:text-bio-head-tb lg:text-bio-head-lg xl:text-bio-head-xl
  mb-5 block
`;

const ProfileTitle = ({ children }) => (
  <h1 className={profileTitleClassName}>{children}</h1>
);

export const ProfileTitleSpan = ({ children }) => (
  <span className="font-condensed">{children}</span>
);

export const OnYourProject = ({ children }) => (
  <div className={onYourProjectClassName}>{children}</div>
);

export default ProfileTitle;
