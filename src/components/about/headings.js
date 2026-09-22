import * as React from 'react';

const sectionHeadingClassName = `
  tb:col-end-5 col-start-1 lg:col-start-2
  font-sans-black
  row-start-1
  text-dezudiorange
  text-heading-sm md:text-heading-md lg:text-heading-2xl xl:text-heading-3bxl
  uppercase
  lg:tracking-loose xl:tracking-normal
`;

export const SubHeading = ({ children }) => (
  <h2
    className={`${sectionHeadingClassName} pb-6 tb:pb-8 md:pb-11 lg:pb-15 xl:pb-20`}
  >
    {children}
  </h2>
);

export const CollaboratorsHeading = ({ children }) => (
  <h2 className={`${sectionHeadingClassName} pb-4 tb:pb-5 lg:pb-7 xl:pb-10`}>
    {children}
  </h2>
);

export default SubHeading;
