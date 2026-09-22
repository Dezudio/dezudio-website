import * as React from 'react';

const serifTaglineClassName = `
  font-serif-bold
  text-black
`;

const aboutUsTaglineClassName = `
  ${serifTaglineClassName}
  col-start-1 lg:col-start-2
  row-start-2 md:row-start-2
  tb:col-end-6 lg:col-end-7
  mb-12 tb:mb-6.5
  lg:pr-10
  text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-2xl
  xl:tracking-loose
`;

const latestTaglineBeforeLinkClassName = `
  ${serifTaglineClassName}
  col-start-1 md:col-start-3 tb:col-end-7
  row-start-1
  mb-7 tb:mb-0
  text-center tb:text-right
  text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
  xl:tracking-loose
`;

// xl:tracking-loose keeps the letter-spacing that Tagline's
// xl:text-tagline-xl used to leave behind under the larger font size.
export const AboutUsTagline = ({ children }) => (
  <h3 className={aboutUsTaglineClassName}>{children}</h3>
);

export const LatestTaglineBeforeLink = ({ children }) => (
  <h3 className={latestTaglineBeforeLinkClassName}>{children}</h3>
);
