import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TeamMember from '../../components/about/TeamMember';
import Layout from '../../components/layout/Layout';

const contentWidthClassName = `
  mx-auto
  w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
`;

const sectionHeadingClassName = `
  tb:col-end-5 col-start-1 lg:col-start-2
  font-sans-black row-start-1
  text-dezudiorange
  text-heading-sm md:text-heading-md lg:text-heading-2xl xl:text-heading-3bxl
  uppercase lg:tracking-loose xl:tracking-normal
`;

const sectionHeadingSpacingClassName =
  'pb-6 tb:pb-8 md:pb-11 lg:pb-15 xl:pb-20';

const standardSectionHeadingClassName = `${sectionHeadingClassName} ${sectionHeadingSpacingClassName}`;

const collaboratorHeadingClassName = `${sectionHeadingClassName} pb-4 tb:pb-5 lg:pb-7 xl:pb-10`;

const aboutParagraphClassName = `
  mb-7.5
  pb-10 sm:pb-0 md:pr-1 xl:pr-0
  sm:mb-5 lg:mb-6 xl:mb-10
`;

const teamSectionClassName = `
  auto-rows-min md:gap-x-16
  block grid-cols-1 tb:grid-cols-12 grid-rows-none
  ${contentWidthClassName}
  pt-12 pb-9
  sm:py-0 sm:my-15 tb:mb-20 md:mb-28 lg:mb-37
`;

const teamImageClassName = `
  profileImage
  h-headshot-sm md:h-headshot-md lg:h-headshot-lg xl:h-headshot-xl
  rounded-full
  w-headshot-sm md:w-headshot-md lg:w-headshot-lg xl:w-headshot-xl
`;

const teamGridClassName = `
  flex flex-wrap tb:flex-nowrap sm:flex-col tb:flex-row
  justify-around
  w-full
  row-start-3
`;

const clearWrapperClassName = 'clear-both';

const greyWrapperClassName = `${clearWrapperClassName} bg-grey`;

const aboutSectionClassName = `
  auto-rows-min md:gap-x-16
  grid grid-cols-1 grid-rows-none tb:grid-cols-10 md:grid-cols-12
  ${contentWidthClassName}
  pt-12 pb-9
  sm:py-0 sm:my-15 tb:my-20 md:mb-28 lg:mb-37
`;

const aboutTaglineClassName = `
  col-start-1 lg:col-start-2 tb:col-end-6 lg:col-end-7
  font-serif-bold
  row-start-2 md:row-start-2
  mb-12 tb:mb-6.5 lg:pr-10
  text-black
  text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-2xl
  xl:tracking-loose
`;

const aboutBodyClassName = `
  text-3xs lg:text-xs xl:text-base-tight text-blue-dark
  tb:col-start-6 md:col-start-7 tb:col-end-11 md:col-end-12
  tb:row-start-2
`;

const collaboratorBodyClassName = `
  tb:col-end-5 tb:col-start-1 lg:col-start-2 tb:row-start-3
  text-blue-dark
  w-3/4 md:w-1/2
  text-5xs lg:text-xs xl:text-base-tight
`;

const collaboratorParagraphClassName = `
  pb-10 sm:pb-0 md:pr-1 xl:pr-0
  sm:text-3xs lg:text-xs xl:text-base2
  mb-6 tb:mb-8 md:mb-11 lg:mb-15 xl:mb-20
`;

const contactSectionClassName = `
  auto-rows-min
  grid grid-cols-1 grid-rows-none tb:grid-cols-9 tb:grid-rows-1
  ${contentWidthClassName}
  pt-12 pb-9 sm:pb-21.5 md:pb-44 sm:pt-21.5 md:pt-48
  gap-0 md:gap-x-16
  items-center
`;

const contactHeadingClassName = `
  font-serif-bold
  col-start-1 tb:col-end-7
  row-start-1
  mb-7 tb:mb-0
  text-black text-center tb:text-right
  text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
  xl:tracking-loose
`;

const contactLinkClassName = `
  block font-sans-reg text-dezudiorange
  text-link-sm md:text-link-sm-loose lg:text-link-base
  md:col-end-13 tb:col-start-7 lg:col-start-7
  my-0 row-start-2 tb:row-start-1
  text-center tb:text-left
  tb:ml-8
  w-37 md:w-auto
`;

const AboutPage = () => (
  <Layout pageTitle="About">
    <div className={clearWrapperClassName}>
      <section className={aboutSectionClassName}>
        <h2 className={standardSectionHeadingClassName}>About Us</h2>
        <h3 className={aboutTaglineClassName}>
          Dezudio is an information design, interaction design, and design
          research consultancy based in Pittsburgh.
        </h3>
        <div className={aboutBodyClassName}>
          <p className={aboutParagraphClassName}>
            Design is powerful. It can inform decision-making, inspire action,
            and drive positive behaviors. At Dezudio, we value research,
            communication, and education as critical tools in bridging the gap
            between where we are and where we need to be.
          </p>
          <p className={aboutParagraphClassName}>
            Founded in 2011, we are seasoned designers and entrepreneurs with
            expertise in design research, user experience, interaction design,
            data-driven reporting, and visual and information design.
          </p>
          <p className={aboutParagraphClassName}>
            We are fully committed to a collaborative design process. As an
            intentionally small team, we work in close partnership with our
            clients to involve stakeholders and gather input throughout the
            design process, always with a focus on quality project outcomes.
          </p>
        </div>
      </section>
    </div>

    <div className={clearWrapperClassName}>
      <section className={teamSectionClassName}>
        <h2 className={standardSectionHeadingClassName}>Meet Our Team</h2>
        <div className={teamGridClassName}>
          <TeamMember name="Raelynn O’Leary" role="Partner" to="raelynn-oleary">
            <StaticImage
              alt="Raelynn O'Leary Headshot"
              className={teamImageClassName}
              objectPosition="center top"
              src="../../images/headshots/raelynn-oleary.jpg"
            />
          </TeamMember>
          <TeamMember name="Ashley Deal" role="Partner" to="ashley-deal">
            <StaticImage
              alt="Ashley Deal Headshot"
              className={teamImageClassName}
              objectPosition="center top"
              src="../../images/headshots/ashley-deal.jpg"
            />
          </TeamMember>
        </div>
      </section>
    </div>

    <div className={clearWrapperClassName}>
      <section className={teamSectionClassName}>
        <h2 className={collaboratorHeadingClassName}>Meet Our Collaborators</h2>
        <div className={collaboratorBodyClassName}>
          <p className={collaboratorParagraphClassName}>
            We are proud of our close-knit community of trusted collaborators
            who partner with us on a project-to-project basis.
          </p>
        </div>
        <div className={teamGridClassName}>
          <TeamMember
            name="Anna Abovyan"
            role="Designer and Strategist"
            href="https://www.linkedin.com/in/annaabovyan/"
          >
            <StaticImage
              alt="Anna Abovyan Headshot"
              className={teamImageClassName}
              objectPosition="center top"
              src="../../images/headshots/anna-abovyan.jpg"
            />
          </TeamMember>
          <TeamMember
            name="Ulu Mills"
            role="Designer"
            href="https://www.linkedin.com/in/ulumills/"
          >
            <StaticImage
              alt="Ulu Mills Headshot"
              className={teamImageClassName}
              objectPosition="center top"
              src="../../images/headshots/ulu-mills.jpg"
            />
          </TeamMember>
          <TeamMember
            name="Norman Huelsman"
            role="Developer"
            href="https://www.linkedin.com/in/normhuelsman/"
          >
            <StaticImage
              alt="Norman Huelsman Headshot"
              className={teamImageClassName}
              objectPosition="center top"
              src="../../images/headshots/norm-huelsman.jpg"
            />
          </TeamMember>
          <TeamMember
            name="Meg Richards"
            role="Technology Advisor"
            href="https://www.linkedin.com/in/merichar/"
          >
            <StaticImage
              alt="Meg Richards Headshot"
              className={teamImageClassName}
              objectPosition="center top"
              src="../../images/headshots/meg-richards.jpg"
            />
          </TeamMember>
        </div>
      </section>
    </div>

    <div className={greyWrapperClassName}>
      <section className={contactSectionClassName}>
        <h3 className={contactHeadingClassName}>Tell us about yourself.</h3>
        <a className={contactLinkClassName} href="mailto:info@dezudio.com">
          Contact us &rarr;
        </a>
      </section>
    </div>
  </Layout>
);

export default AboutPage;

export const Head = () => <title>About - Dezudio</title>;
