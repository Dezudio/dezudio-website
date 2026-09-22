import * as React from 'react';
import { Link } from 'gatsby';
import Container from './containers';
import withClasses from '../withClasses';

const SectionBody = withClasses(
  'div',
  `
block tb:grid
grid-cols-10 md:grid-cols-10
gap-0
row-start-1
col-start-1 md:col-start-2
col-end-3 tb:col-end-12
text-profile-body-tb lg:text-xs xl:text-base-tight
text-blue-dark
font-serif-reg
`
);

const PrevBlockLink = withClasses(
  Link,
  `
block
font-sans-reg
mb-0
text-dezudiorange
text-link-sm md:text-link-md lg:text-heading-lg xl:text-link-xl
row-start-2 md:row-start-1
col-start-1
tb:col-span-3 md:col-auto
mt-18 md:mt-0
pt-0 md:pt-48
xl:justify-self-center
w-auto md:w-auto
`
);

const NextBlockLink = withClasses(
  Link,
  `
block
font-sans-reg
mb-0
text-dezudiorange
text-link-sm md:text-link-md lg:text-heading-lg xl:text-link-xl
row-start-2 md:row-start-1
tb:col-end-13
tb:col-span-3 md:col-auto
mt-18 md:mt-0
pt-0 md:pt-48
text-right
xl:justify-self-center
w-auto md:w-auto
`
);

const CloseLink = withClasses(
  Link,
  `
block
font-sans-reg
mb-0
text-dezudiorange
text-link-sm md:text-link-md lg:text-heading-lg xl:text-link-xl
absolute
right-10
mt-8.4 md:mt-15
w-0 md:w-auto
`
);

const ShowWhenSmall = withClasses(
  'span',
  `
visible md:hidden
`
);

const PeopleSection = withClasses(
  'section',
  `
auto-rows-min
grid
grid-rows-none
mx-auto
pt-12
pb-9
w-sm tb:w-tb md:w-md lg:w-lg
grid-cols-2 tb:grid-cols-12
gap-x-0 md:gap-x-16
sm:pt-13 tb:pt-30 md:pt-37 lg:pt-49
tb:pb-18 md:pb-49 lg:pb-60.6 xl:pb-bg-sm
xl:w-96p
`
);

const Layout = ({ fromPerson, toPerson, children }) => {
  return (
    <main>
      <CloseLink to="..">
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
      </CloseLink>
      <Container>
        <PeopleSection>
          <PrevBlockLink to={fromPerson}>
            <svg
              className={`svg-arrow`}
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
            <ShowWhenSmall> Previous</ShowWhenSmall>
          </PrevBlockLink>
          <SectionBody>{children}</SectionBody>
          <NextBlockLink to={toPerson}>
            <ShowWhenSmall>Next </ShowWhenSmall>
            <svg
              className={`svg-arrow`}
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
          </NextBlockLink>
        </PeopleSection>
      </Container>
    </main>
  );
};

export default Layout;
