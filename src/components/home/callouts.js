import * as React from 'react';

const calloutClassName = `
  tb:col-start-1 lg:col-start-2 tb:col-end-5
  font-condensed
  p-2 md:p-2.5 lg:p-4 xl:p-6
  md:row-start-4
  w-sm tb:w-auto
`;

const calloutHeadingClassName = `
  font-condensed-bold
  pb-1.5 tb:pb-1 md:pb-1.5 lg:pb-2 xl:pb-3
  text-dezudiorange
  text-heading-sm-tight md:text-heading-sm-tighter lg:text-heading-caption-lg xl:text-heading-2xl-tighter
`;

const calloutParagraphClassName = `
  font-condensed-bk
  text-4xs-tight md:text-5xs-tight lg:text-xs-callout xl:text-sm
`;

const Callout = ({ children }) => (
  <div className={`${calloutClassName} bg-white/50`}>{children}</div>
);

export const CalloutHeading = ({ children }) => (
  <h3 className={calloutHeadingClassName}>{children}</h3>
);

export const CalloutP = ({ children }) => (
  <p className={calloutParagraphClassName}>{children}</p>
);

export const CalloutDark = ({ children }) => (
  <div className={`${calloutClassName} bg-black-dark/30 text-white`}>
    {children}
  </div>
);

export default Callout;
