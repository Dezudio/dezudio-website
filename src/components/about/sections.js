import * as React from 'react';

const contentWidthClassName = `
  mx-auto
  w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
`;

const sectionGridClassName = `
  auto-rows-min
  md:gap-x-16
  grid-rows-none
  ${contentWidthClassName}
`;

const paragraphInsetClassName = `
  pb-10 sm:pb-0
  md:pr-1 xl:pr-0
`;

const bodyTextClassName = `
  text-3xs lg:text-xs xl:text-base-tight
  text-blue-dark
`;

const clearWrapperClassName = 'clear-both';

const aboutSectionClassName = `
  ${sectionGridClassName}
  grid grid-cols-1 tb:grid-cols-10 md:grid-cols-12
  pt-12 pb-9
  sm:py-0 sm:my-15 tb:my-20 md:mb-28 lg:mb-37
`;

const teamsSectionClassName = `
  ${sectionGridClassName}
  block grid-cols-1 tb:grid-cols-12
  pt-12 pb-9
  sm:py-0 sm:my-15 tb:mb-20 md:mb-28 lg:mb-37
`;

const latestTaglineLinkSectionClassName = `
  auto-rows-min
  grid grid-cols-1 grid-rows-none tb:grid-cols-9 tb:grid-rows-1
  ${contentWidthClassName}
  pt-12 pb-9
  sm:pb-21.5 md:pb-44
  sm:pt-21.5 md:pt-48
  gap-0 md:gap-x-16
  items-center
`;

const meetOurTeamSectionParagraphClassName = `
  ${paragraphInsetClassName}
  sm:text-3xs lg:text-xs xl:text-base2
  mb-6 tb:mb-8 md:mb-11 lg:mb-15 xl:mb-20
`;

const meetOurTeamSectionBodyClassName = `
  tb:col-end-5 tb:col-start-1 lg:col-start-2 tb:row-start-3
  text-blue-dark
  w-3/4 md:w-1/2
  text-5xs lg:text-xs xl:text-base-tight
`;

const profileSideSectionClassName = `
  bg-grey-light
  font-sans-reg
  text-bio-side-sm lg:text-bio-side-lg xl:text-bio-side-xl
  tb:mt-11.5 md:mt-0
  p-5
  lg:w-37p
`;

export const SectionWrapper = ({ children }) => (
  <div className={clearWrapperClassName}>{children}</div>
);

export const SectionWrapperGrey = ({ children }) => (
  <div className={`${clearWrapperClassName} bg-grey`}>{children}</div>
);

export const AboutSection = ({ children }) => (
  <section className={aboutSectionClassName}>{children}</section>
);

export const TeamsSection = ({ children }) => (
  <section className={teamsSectionClassName}>{children}</section>
);

export const AboutSectionP = ({ children }) => (
  <p className={`${paragraphInsetClassName} mb-7.5 sm:mb-5 lg:mb-6 xl:mb-10`}>
    {children}
  </p>
);

export const AboutUsSectionBody = ({ children }) => (
  <div
    className={`
      ${bodyTextClassName}
      tb:col-start-6 md:col-start-7
      tb:col-end-11 md:col-end-12
      tb:row-start-2
    `}
  >
    {children}
  </div>
);

export const MeetOurTeamSectionBody = ({ children }) => (
  <div className={meetOurTeamSectionBodyClassName}>{children}</div>
);

export const MeetOurTeamSectionP = ({ children }) => (
  <p className={meetOurTeamSectionParagraphClassName}>{children}</p>
);

export const ProfileContent = ({ children }) => (
  <div className="block lg:flex justify-between col-start-3 md:col-start-3 col-span-full ml-0 md:ml-0">
    {children}
  </div>
);

export const ProfileMainSection = ({ children }) => (
  <div className="font-serif-reg lg:w-60p">{children}</div>
);

export const ProfileMainSectionP = ({ children }) => (
  <p className={`${paragraphInsetClassName} mb-7.5 tb:mb-4.5 md:mb-10`}>
    {children}
  </p>
);

export const ProfileSideSection = ({ children }) => (
  <div className={profileSideSectionClassName}>{children}</div>
);

export const LatestTaglineLinkSection = ({ children }) => (
  <section className={latestTaglineLinkSectionClassName}>{children}</section>
);

export const UnorderedList = ({ children }) => (
  <ul className="list-disc pl-6">{children}</ul>
);

export const UlItem = ({ children }) => (
  <li className="pb-5 last:pb-2.5">{children}</li>
);
