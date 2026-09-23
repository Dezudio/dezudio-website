import * as React from 'react';
import Layout from '../components/layout/Layout';

const contentWidthClassName = `
  mx-auto
  w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
`;

const sectionWrapperClass = 'clear-both';

const latestSectionClass = `
  auto-rows-min md:gap-x-16
  grid grid-cols-1 grid-rows-none tb:grid-cols-10 md:grid-cols-12
  ${contentWidthClassName}
  pt-12 pb-9
  sm:py-0 sm:my-15 tb:my-20 md:mb-28 lg:mb-37
`;

const headingClass = `
  tb:col-end-5 col-start-1 lg:col-start-2
  font-sans-black row-start-1
  text-dezudiorange
  text-heading-sm md:text-heading-md lg:text-heading-2xl xl:text-heading-3bxl
  uppercase lg:tracking-loose xl:tracking-normal
  pb-6 tb:pb-8 md:pb-11.5 lg:pb-15 xl:pb-20
`;

const taglineClass = `
  col-start-1 lg:col-start-2 tb:col-end-6 lg:col-end-7
  font-serif-bold row-start-2 md:row-start-2
  mb-12 tb:mb-6.5 lg:pr-10
  text-black
  text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-2xl
  xl:tracking-loose
`;

const bodyClass = `
  text-3xs lg:text-xs xl:text-base-tight text-blue-dark
  tb:col-start-6 md:col-start-7 tb:col-end-11 md:col-end-12
  tb:row-start-2
`;

const paragraphClass = `
  mb-7.5 sm:mb-5 lg:mb-6 xl:mb-10
  pb-10 sm:pb-0 md:pr-1 xl:pr-0
`;

const callToActionClass = `
  auto-rows-min
  grid grid-cols-1 grid-rows-none tb:grid-cols-9 tb:grid-rows-1
  ${contentWidthClassName}
  pt-12 pb-9 sm:pb-21.5 md:pb-44 sm:pt-21.5 md:pt-48
  gap-0 md:gap-x-16
  items-center
`;

const callToActionHeadingClass = `
  font-serif-bold
  col-start-1 tb:col-start-1 tb:col-end-7 md:col-end-7
  row-start-1
  mb-7 tb:mb-0
  text-black text-center tb:text-right
  text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
  xl:tracking-loose
`;

const callToActionLinkClass = `
  block font-sans-reg text-dezudiorange
  text-link-sm md:text-link-sm-loose lg:text-link-base
  md:col-end-13 tb:col-start-7 lg:col-start-7
  my-0 row-start-2 tb:row-start-1
  text-center tb:text-left
  tb:ml-8
  w-37 md:w-auto
`;

const LatestPage = () => {
  return (
    <Layout pageTitle="Latest">
      {/* Latest Section */}
      <div className={sectionWrapperClass}>
        <section className={latestSectionClass}>
          <h2 className={headingClass}>Latest</h2>
          <h3 className={taglineClass}>Dezudio is always up to something.</h3>
          <div className={bodyClass}>
            <p className={paragraphClass}>
              As a proud, woman-owned small business, we love independent
              working, and helping others take on entrepreneurial design roles
              as freelancers, independent consultants, and business owners.
            </p>
            <p className={paragraphClass}>
              In addition to our design practice, we teach graduate courses in
              design. We are involved with the design communities in our
              respective cities through design organizations and volunteer
              roles, and sometimes speak at conferences.
            </p>
          </div>
        </section>
      </div>

      {/* Follow Us Section */}
      <div className={sectionWrapperClass}>
        <section className={callToActionClass}>
          <h3 className={callToActionHeadingClass}>Follow us.</h3>
          <a
            className={callToActionLinkClass}
            href="https://www.instagram.com/dezudio"
          >
            Go to Instagram &rarr;
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default LatestPage;

export const Head = () => <title>Latest - Dezudio</title>;
