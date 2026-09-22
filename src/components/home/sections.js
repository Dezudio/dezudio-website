import * as React from 'react';

const contentWidthClassName = `
  mx-auto
  w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
`;

const gridSectionClassName = `
  auto-rows-min
  md:gap-x-16
  grid grid-cols-1 tb:grid-cols-12 grid-rows-none
  ${contentWidthClassName}
`;

const bodyTextClassName = `
  text-3xs lg:text-xs xl:text-base-tight
  text-blue-dark
`;

const paragraphInsetClassName = `
  pb-10 sm:pb-0
  md:pr-1 xl:pr-0
`;

const clearWrapperClassName = 'clear-both';

const sectionClassName = `
  ${gridSectionClassName}
  pt-12 tb:pt-15 md:pt-20 lg:pt-28
  pb-9 md:pb-16 xl:pb-24
`;

const sectionBodyClassName = `
  tb:col-end-5
  tb:col-start-1 lg:col-start-2
  tb:row-start-3
  ${bodyTextClassName}
`;

const sectionImageClassName = `
  tb:col-end-13 md:col-end-12
  tb:col-start-6 md:col-start-5 xl:col-start-6
  my-0 sm:my-12 md:my-0
  md:pt-2
  tb:row-end-7 tb:row-start-1
`;

const sectionParagraphClassName = `
  mb-7.5 md:mb-10
  ${paragraphInsetClassName}
`;

const aboutUsSectionBodyClassName = `
  tb:col-end-5 tb:col-start-1 tb:row-start-3
  ${bodyTextClassName}
  md:row-start-2 md:col-start-7 md:col-end-12
`;

const approachSectionClassName = `
  ${gridSectionClassName}
  pt-12 pb-9
  sm:py-12 tb:py-15 md:py-20 lg:py-32 xl:py-40
`;

const approachSectionBodyClassName = `
  ${bodyTextClassName}
  tb:row-start-2
  tb:col-start-7 md:col-start-8 lg:col-start-8
  tb:col-end-13 md:col-end-12
`;

const believeSectionClassName = `
  ${contentWidthClassName}
  auto-rows-min
  md:gap-x-16
  grid-cols-1 tb:grid-cols-12 grid-rows-none
  pt-12 pb-9
  block md:grid
  sm:pt-21.5 tb:pt-17 md:pt-22
  sm:pb-21.5 tb:pb-17 md:pb-16
`;

const clientsSectionBodyClassName = `
  ${bodyTextClassName}
  col-start-1 tb:col-start-2 xl:col-start-3
  tb:col-end-12 xl:col-end-11
  row-start-2 tb:row-start-3
  text-center
`;

const latestTaglineLinkSectionClassName = `
  auto-rows-min
  grid grid-cols-1 grid-rows-none
  ${contentWidthClassName}
  pt-12 pb-9
  sm:pb-21.5 md:pb-44
  sm:pt-21.5 md:pt-48
  tb:grid-cols-9 tb:grid-rows-1
  gap-0 md:gap-x-16
  items-center
`;

const strategySectionImageClassName = `
  tb:col-end-13
  tb:col-start-6 md:col-start-5
  my-0 sm:my-12 md:my-0
  tb:row-end-7 tb:row-start-1
  md:col-end-13 xl:col-start-5
  md:py-40.5 lg:py-72
`;

const understandingSectionClassName = `
  ${gridSectionClassName}
  py-21.5 tb:pt-15 md:py-37 lg:py-40 xl:py-49
`;

const understandingSectionBodyClassName = `
  col-start-1 tb:col-start-1 lg:col-start-1
  tb:col-end-8 md:col-end-9 lg:col-end-8 xl:col-end-10
  flex
  font-condensed-lt
  row-start-2 tb:row-start-3
  text-2xs tb:text-xs-callout md:text-sm-tight lg:text-lg xl:text-xl
  text-black
`;

const whatWeDoSectionParagraphClassName = `
  mb-7.5 md:mb-10
  ${paragraphInsetClassName}
  min-h-0 sm:min-h-0 tb:min-h-[450px] md:min-h-[500px]
  lg:min-h-[650px] xl:min-h-[700px]
`;

const Section = ({ children }) => (
  <section className={sectionClassName}>{children}</section>
);

export const SectionBody = ({ children }) => (
  <div className={sectionBodyClassName}>{children}</div>
);
export const SectionImage = ({ children }) => (
  <div className={sectionImageClassName}>{children}</div>
);
export const SectionImageBG = ({ children }) => (
  <div className="tb:hidden">{children}</div>
);
export const SectionP = ({ children }) => (
  <p className={sectionParagraphClassName}>{children}</p>
);
export const SectionPInverse = ({ children }) => (
  <p className={`${sectionParagraphClassName} text-white`}>{children}</p>
);
export const SectionWrapper = ({ children }) => (
  <div className={clearWrapperClassName}>{children}</div>
);
export const SectionWrapperBlueDark = ({ children }) => (
  <div className={`${clearWrapperClassName} bg-blue-dark`}>{children}</div>
);
export const SectionWrapperGrey = ({ children }) => (
  <div className={`${clearWrapperClassName} bg-grey`}>{children}</div>
);
export const UnderstandingSectionP = ({ children }) => (
  <p className={paragraphInsetClassName}>{children}</p>
);
export const AboutUsSectionBody = ({ children }) => (
  <div className={aboutUsSectionBodyClassName}>{children}</div>
);
export const ApproachSection = ({ children }) => (
  <section className={approachSectionClassName}>{children}</section>
);
export const ApproachSectionBody = ({ children }) => (
  <div className={approachSectionBodyClassName}>{children}</div>
);
export const ApproachSectionP = ({ children }) => (
  <p
    className={`${paragraphInsetClassName} mb-0 md:mb-10 sm:pb-8.5 tb:pb-6 md:pb-7.5 lg:pb-10 pr-0`}
  >
    {children}
  </p>
);
export const BelieveSection = ({ children }) => (
  <section className={believeSectionClassName}>{children}</section>
);
export const ClientsSectionBody = ({ children }) => (
  <div className={clientsSectionBodyClassName}>{children}</div>
);
export const LatestTaglineLinkSection = ({ children }) => (
  <section className={latestTaglineLinkSectionClassName}>{children}</section>
);
export const PlatformsSectionWrapper = ({ children }) => (
  <div
    className={`${clearWrapperClassName} bg-linear-to-b/srgb from-blue-light to-blue`}
  >
    {children}
  </div>
);
// The *-bg classes add each section's photo; see src/styles/global.css.
export const ProcessSectionWrapper = ({ children }) => (
  <div
    className={`${clearWrapperClassName} bg-grey bg-cover bg-no-repeat bg-right-bottom process-bg`}
  >
    {children}
  </div>
);
export const ResearchSectionWrapper = ({ children }) => (
  <div
    className={`${clearWrapperClassName} bg-grey bg-cover bg-no-repeat bg-right-top research-bg`}
  >
    {children}
  </div>
);
export const StrategySectionImage = ({ children }) => (
  <div className={strategySectionImageClassName}>{children}</div>
);
export const StrategySectionWrapper = ({ children }) => (
  <div className={`${clearWrapperClassName} bg-seafoam`}>{children}</div>
);
export const SystemsSectionWrapper = ({ children }) => (
  <div
    className={`${clearWrapperClassName} bg-linear-to-b/srgb from-blue-light to-blue`}
  >
    {children}
  </div>
);
export const UnderstandingSection = ({ children }) => (
  <section className={understandingSectionClassName}>{children}</section>
);
export const UnderstandingSectionBody = ({ children }) => (
  <div className={understandingSectionBodyClassName}>{children}</div>
);
export const WhatWeDoSectionP = ({ children }) => (
  <p className={whatWeDoSectionParagraphClassName}>{children}</p>
);
export const WhatWeDoSectionPInverse = ({ children }) => (
  <p className={`${whatWeDoSectionParagraphClassName} text-white`}>
    {children}
  </p>
);
export const WorkshopsSectionWrapper = ({ children }) => (
  <div
    className={`${clearWrapperClassName} bg-grey-dark bg-cover bg-no-repeat bg-right-bottom workshops-bg`}
  >
    {children}
  </div>
);

export default Section;
