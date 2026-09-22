import * as React from 'react';
import { Link } from 'gatsby';

const bioLinkClass = `
  block
  font-sans-reg
  mb-0
  text-dezudiorange
  text-link-sm md:text-link-md lg:text-heading-lg xl:text-link-xl
`;

const closeLinkClass = `
  ${bioLinkClass}
  absolute right-10
  mt-8.4 md:mt-15
  w-0 md:w-auto
`;

const bioSectionClass = `
  auto-rows-min
  grid grid-cols-2 tb:grid-cols-12 grid-rows-none
  gap-x-0 md:gap-x-16
  mx-auto
  pt-12 sm:pt-13 tb:pt-30 md:pt-37 lg:pt-49
  pb-9 tb:pb-18 md:pb-49 lg:pb-60.6 xl:pb-bg-sm
  w-sm tb:w-tb md:w-md lg:w-lg xl:w-96p
`;

const previousLinkClass = `
  ${bioLinkClass}
  row-start-2 md:row-start-1 col-start-1 tb:col-span-3 md:col-auto
  mt-18 md:mt-0 pt-0 md:pt-48
  xl:justify-self-center
  w-auto md:w-auto
`;

const sectionBodyClass = `
  block tb:grid grid-cols-10 md:grid-cols-10
  gap-0
  row-start-1 col-start-1 md:col-start-2 col-end-3 tb:col-end-12
  text-profile-body-tb lg:text-xs xl:text-base-tight
  text-blue-dark
  font-serif-reg
`;

const nextLinkClass = `
  ${bioLinkClass}
  row-start-2 md:row-start-1 tb:col-end-13 tb:col-span-3 md:col-auto
  mt-18 md:mt-0 pt-0 md:pt-48
  text-right xl:justify-self-center
  w-auto md:w-auto
`;

export const bioProfileImageClassName = `
  tb:col-span-2 tb:justify-self-end md:justify-self-start row-span-2
  tb:mr-5 md:mr-0
  h-bio-headshot-sm tb:h-bio-headshot-tb md:h-bio-headshot-md lg:h-bio-headshot-lg xl:h-bio-headshot-xl
  rounded-full
  w-bio-headshot-sm tb:w-bio-headshot-tb md:w-bio-headshot-md lg:w-bio-headshot-lg xl:w-bio-headshot-xl
`;

const profileTitleClassName = `
  col-start-3 col-span-full
  font-condensed-bold
  text-profile-title-sm tb:text-profile-title-md lg:text-profile-title-lg xl:text-profile-title-xl
  pt-5 tb:pt-6.4 md:pt-15 lg:pt-28.1 xl:pt-30
  pb-7.5 tb:pb-4.5 md:pb-5.5 lg:pb-11.5 xl:pb-15
`;

const profileContentClassName = `
  block lg:flex justify-between
  col-start-3 md:col-start-3 col-span-full
  ml-0 md:ml-0
`;

export const bioParagraphClassName = `
  mb-7.5 tb:mb-4.5 md:mb-10
  pb-10 sm:pb-0 md:pr-1 xl:pr-0
`;

export const bioListClassName = 'list-disc pl-6';

export const bioListItemClassName = 'pb-5 last:pb-2.5';

const profileSideClassName = `
  bg-grey-light font-sans-reg
  text-bio-side-sm lg:text-bio-side-lg xl:text-bio-side-xl
  tb:mt-11.5 md:mt-0 p-5 lg:w-37p
`;

const profileSideHeadingClassName = `
  font-condensed-bold
  text-bio-head-sm tb:text-bio-head-tb lg:text-bio-head-lg xl:text-bio-head-xl
  mb-5 block
`;

const BioLayout = ({
  name,
  role,
  fromPerson,
  toPerson,
  mainContent,
  sideContent,
  children,
}) => (
  <main>
    <Link aria-label="Return to About" className={closeLinkClass} to="..">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#F45D48" strokeWidth="4" fill="none" fillRule="evenodd">
          <path d="M2 23.397 23.213 2.183" />
          <path d="m2.187 2 20.839 21.58" />
        </g>
      </svg>
    </Link>
    <div className="font-body text-base text-blue-dark">
      <section className={bioSectionClass}>
        <Link
          aria-label="Previous team member"
          className={previousLinkClass}
          to={fromPerson}
        >
          <svg
            className="svg-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35.13 19.26"
          >
            <g data-name="Layer 2">
              <path
                fill="#f15e49"
                stroke="#f15e49"
                strokeMiterlimit="10"
                strokeWidth=".75"
                d="M9.76.87v7.26h25v3h-25v7.26L.54 9.63 9.76.87z"
                data-name="Layer 1"
              />
            </g>
          </svg>
          <span className="visible md:hidden"> Previous</span>
        </Link>
        <div className={sectionBodyClass}>
          {children}
          <h1 className={profileTitleClassName}>
            {name}, <span className="font-condensed">{role}</span>
          </h1>
          <div className={profileContentClassName}>
            <div className="font-serif-reg lg:w-60p">{mainContent}</div>
            <div className={profileSideClassName}>
              <div className={profileSideHeadingClassName}>
                Here’s why you want {name.split(' ')[0]} on your project:
              </div>
              {sideContent}
            </div>
          </div>
        </div>
        <Link
          aria-label="Next team member"
          className={nextLinkClass}
          to={toPerson}
        >
          <span className="visible md:hidden">Next </span>
          <svg
            className="svg-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35.13 19.26"
          >
            <g data-name="Layer 2">
              <path
                fill="#f15e49"
                stroke="#f15e49"
                strokeMiterlimit="10"
                strokeWidth=".75"
                d="M25.38 18.39v-7.26h-25v-3h25V.87l9.21 8.76-9.21 8.76z"
                data-name="Layer 1"
              />
            </g>
          </svg>
        </Link>
      </section>
    </div>
  </main>
);

export default BioLayout;
