import * as React from 'react';

const serifTaglineClassName = 'font-serif-bold';

const standardTaglineClassName = `
  ${serifTaglineClassName}
  tb:col-end-5 col-start-1 lg:col-start-2
  mb-7 tb:mb-6.5
  row-start-2
  text-blue-dark
  text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-lg xl:text-tagline-xl
`;

const approachTaglineClassName = `
  ${serifTaglineClassName}
  col-start-1 lg:col-start-2
  row-start-2 md:row-start-2
  text-tagline-2xs-tight md:text-tagline-lg lg:text-tagline-2xl
  xl:tracking-loose
  tb:col-end-6 md:col-end-8 lg:col-end-7
  lg:pr-10
  mb-12 tb:mb-6.5
  text-black
`;

const believeTaglineClassName = `
  ${serifTaglineClassName}
  tb:col-end-5 col-start-1 md:col-start-2 lg:col-start-3
  row-start-2
  md:col-end-11 lg:col-end-10
  mb-7 sm:mb-0
  lg:py-24 xl:py-48
  text-center text-white
  text-tagline-sm tb:text-tagline-tb2 md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
  xl:tracking-loose
`;

const clientsTaglineClassName = `
  ${serifTaglineClassName}
  col-start-1 tb:col-start-2 lg:col-start-3
  tb:col-end-12 lg:col-end-11
  row-start-1
  mt-5
  mb-7 tb:mb-6.5
  md:pb-12 lg:pb-24
  text-black text-center
  text-tagline-2xs md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
  xl:tracking-loose
`;

const latestTaglineBeforeLinkClassName = `
  ${serifTaglineClassName}
  col-start-1 tb:col-start-1 md:col-start-3
  row-start-1
  tb:col-end-7 md:col-end-7
  mb-7 tb:mb-0
  text-black text-center tb:text-right
  text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
  xl:tracking-loose
`;

const platformsTaglineClassName = `
  ${serifTaglineClassName}
  tb:col-end-5 col-start-1 lg:col-start-2
  row-start-2
  mb-5.5 tb:mb-6.5 md:mb-6.5 lg:mb-8.4 xl:mb-10.5
  text-white
  text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-lg2
  xl:tracking-loose
`;

const systemsTaglineClassName = `
  ${standardTaglineClassName}
  lg:pb-12
  text-white
`;

const understandingTaglineClassName = `
  ${serifTaglineClassName}
  col-start-1 lg:col-start-1 tb:col-end-12
  row-start-1
  mb-5 tb:mb-6.5 md:mb-16 lg:mb-21
  text-black
  text-tagline-base tb:text-tagline-tb md:text-tagline-4xl lg:text-tagline-5xl
  xl:tracking-loose
`;

const Tagline = ({ children, className }) => (
  <h3 className={className}>{children}</h3>
);

export const ApproachTagline = ({ children }) => (
  <Tagline className={approachTaglineClassName}>{children}</Tagline>
);
export const BelieveTagline = ({ children }) => (
  <Tagline className={believeTaglineClassName}>{children}</Tagline>
);
export const ClientsTagline = ({ children }) => (
  <Tagline className={clientsTaglineClassName}>{children}</Tagline>
);
export const LatestTaglineBeforeLink = ({ children }) => (
  <Tagline className={latestTaglineBeforeLinkClassName}>{children}</Tagline>
);
export const PlatformsTagline = ({ children }) => (
  <Tagline className={platformsTaglineClassName}>{children}</Tagline>
);
export const SystemsTagline = ({ children }) => (
  <Tagline className={systemsTaglineClassName}>{children}</Tagline>
);
export const UnderstandingTagline = ({ children, className = '' }) => (
  <Tagline className={`${understandingTaglineClassName} ${className}`}>
    {children}
  </Tagline>
);

const HomeTagline = ({ children }) => (
  <Tagline className={standardTaglineClassName}>{children}</Tagline>
);

export default HomeTagline;
