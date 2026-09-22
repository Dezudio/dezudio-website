import * as React from 'react';

const sectionHeadingClassName = `
  tb:col-end-5 col-start-1 lg:col-start-2
  font-sans-black
  pb-2
  row-start-1
  text-dezudiorange
  text-heading-sm md:text-heading-md lg:text-heading-2xl xl:text-heading-3bxl
  uppercase
  lg:tracking-loose xl:tracking-normal
`;

const headingSubClassName = `
  font-condensed-bold
  pb-2.5 lg:pb-3.5 xl:pb-4
  text-black
  text-heading-lg md:text-heading-2xl lg:text-heading-5xl xl:text-heading-6xl
`;

const Heading = ({ children }) => (
  <h2 className={sectionHeadingClassName}>{children}</h2>
);

export const HeadingSub = ({ children }) => (
  <h3 className={headingSubClassName}>{children}</h3>
);

export const ApproachHeading = ({ children }) => (
  <h2
    className={`${sectionHeadingClassName} sm:pb-8.5 tb:pb-8 md:pb-11.5 lg:pb-15 xl:pb-20`}
  >
    {children}
  </h2>
);

export default Heading;
