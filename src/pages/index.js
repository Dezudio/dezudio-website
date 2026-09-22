import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/Layout';

const understandingSectionClassName = `
  auto-rows-min md:gap-x-16
  grid grid-cols-1 tb:grid-cols-12 grid-rows-none
  mx-auto w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
  py-21.5 tb:pt-15 md:py-37 lg:py-40 xl:py-49
`;

const understandingTaglineClassName = `
  font-serif-bold
  col-start-1 lg:col-start-1 tb:col-end-12
  row-start-1
  mb-5 tb:mb-6.5 md:mb-16 lg:mb-21
  text-black
  text-tagline-base tb:text-tagline-tb md:text-tagline-4xl lg:text-tagline-5xl
  xl:tracking-loose
`;

const believeSectionClassName = `
  auto-rows-min md:gap-x-16
  block md:grid grid-cols-1 tb:grid-cols-12 grid-rows-none
  mx-auto w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
  pt-12 pb-9
  sm:pt-21.5 tb:pt-17 md:pt-22
  sm:pb-21.5 tb:pb-17 md:pb-16
`;

const believeTaglineClassName = `
  font-serif-bold
  tb:col-end-5 col-start-1 md:col-start-2 lg:col-start-3
  row-start-2 md:col-end-11 lg:col-end-10
  mb-7 sm:mb-0 lg:py-24 xl:py-48
  text-center text-white
  text-tagline-sm tb:text-tagline-tb2 md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
  xl:tracking-loose
`;

const serviceSectionClassName = `
  auto-rows-min md:gap-x-16
  grid grid-cols-1 tb:grid-cols-12 grid-rows-none
  mx-auto w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
  pt-12 tb:pt-15 md:pt-20 lg:pt-28
  pb-9 md:pb-16 xl:pb-24
`;

const serviceHeadingClassName = `
  tb:col-end-5 col-start-1 lg:col-start-2
  font-sans-black pb-2 row-start-1
  text-dezudiorange
  text-heading-sm md:text-heading-md lg:text-heading-2xl xl:text-heading-3bxl
  uppercase lg:tracking-loose xl:tracking-normal
`;

const platformsTaglineClassName = `
  font-serif-bold
  tb:col-end-5 col-start-1 lg:col-start-2
  row-start-2
  mb-5.5 tb:mb-6.5 md:mb-6.5 lg:mb-8.4 xl:mb-10.5
  text-white
  text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-lg2
  xl:tracking-loose
`;

const serviceBodyClassName = `
  tb:col-end-5 tb:col-start-1 lg:col-start-2 tb:row-start-3
  text-3xs lg:text-xs xl:text-base-tight text-blue-dark
`;

const inverseServiceParagraphClassName = `
  mb-7.5 md:mb-10
  pb-10 sm:pb-0 md:pr-1 xl:pr-0
  min-h-0 sm:min-h-0 tb:min-h-[450px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[700px]
  text-white
`;

const serviceImageClassName = `
  tb:col-end-13 md:col-end-12
  tb:col-start-6 md:col-start-5 xl:col-start-6
  my-0 sm:my-12 md:my-0 md:pt-2
  tb:row-end-7 tb:row-start-1
`;

const projectCalloutClassName = `
  tb:col-start-1 lg:col-start-2 tb:col-end-5
  font-condensed
  p-2 md:p-2.5 lg:p-4 xl:p-6
  md:row-start-4
  w-sm tb:w-auto
`;

const researchTaglineClassName = `
  font-serif-bold
  tb:col-end-5 col-start-1
  mb-7 tb:mb-6.5
  row-start-2
  text-black
  text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-lg xl:text-tagline-xl
`;

const standardServiceParagraphClassName = `
  mb-7.5 md:mb-10
  pb-10 sm:pb-0 md:pr-1 xl:pr-0
  min-h-0 sm:min-h-0 tb:min-h-[450px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[700px]
`;

const researchImageClassName = 'tb:hidden';

const researchCalloutClassName = `${projectCalloutClassName} bg-white/50`;

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

const systemsTaglineClassName = `
  font-serif-bold
  tb:col-end-5 col-start-1 lg:col-start-2
  mb-7 tb:mb-6.5
  row-start-2
  text-blue-dark text-white
  text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-lg xl:text-tagline-xl
  lg:pb-12
`;

const systemsWrapperClassName =
  'clear-both bg-linear-to-b/srgb from-blue-light to-blue';

const darkCalloutClassName = `${projectCalloutClassName} bg-black-dark/30 text-white`;

const processWrapperClassName =
  'clear-both bg-grey bg-cover bg-no-repeat bg-right-bottom process-bg';

const researchProcessImageClassName = 'tb:hidden';

const standardTaglineClassName = `
  font-serif-bold
  tb:col-end-5 col-start-1 lg:col-start-2
  mb-7 tb:mb-6.5
  row-start-2
  text-blue-dark
  text-tagline-2xs-tight md:text-tagline-xs lg:text-tagline-lg xl:text-tagline-xl
`;

const strategyWrapperClassName = 'clear-both bg-seafoam';

const strategyImageClassName = `
  tb:col-end-13 tb:col-start-6 md:col-start-5
  my-0 sm:my-12 md:my-0 tb:row-end-7 tb:row-start-1
  md:col-end-13 xl:col-start-5 md:py-40.5 lg:py-72
`;

const workshopsWrapperClassName =
  'clear-both bg-grey-dark bg-cover bg-no-repeat bg-right-bottom workshops-bg';

const workshopsImageClassName = 'tb:hidden';

const approachSectionClassName = `
  auto-rows-min md:gap-x-16
  grid grid-cols-1 tb:grid-cols-12 grid-rows-none
  mx-auto w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
  pt-12 pb-9
  sm:py-12 tb:py-15 md:py-20 lg:py-32 xl:py-40
`;

const approachHeadingClassName = `
  tb:col-end-5 col-start-1 lg:col-start-2
  font-sans-black pb-2 row-start-1
  text-dezudiorange
  text-heading-sm md:text-heading-md lg:text-heading-2xl xl:text-heading-3bxl
  uppercase lg:tracking-loose xl:tracking-normal
  sm:pb-8.5 tb:pb-8 md:pb-11.5 lg:pb-15 xl:pb-20
`;

const approachTaglineClassName = `
  font-serif-bold
  col-start-1 lg:col-start-2
  row-start-2 md:row-start-2
  text-tagline-2xs-tight md:text-tagline-lg lg:text-tagline-2xl
  xl:tracking-loose
  tb:col-end-6 md:col-end-8 lg:col-end-7
  lg:pr-10
  mb-12 tb:mb-6.5
  text-black
`;

const approachSectionBodyClassName = `
  text-3xs lg:text-xs xl:text-base-tight text-blue-dark
  tb:row-start-2
  tb:col-start-7 md:col-start-8 lg:col-start-8
  tb:col-end-13 md:col-end-12
`;

const approachSubheadingClassName = `
  font-condensed-bold
  pb-2.5 lg:pb-3.5 xl:pb-4
  text-black text-heading-lg md:text-heading-2xl lg:text-heading-5xl xl:text-heading-6xl
`;

const approachParagraphClassName = `
  pb-10 mb-0 md:mb-10 sm:pb-8.5 tb:pb-6 md:pb-7.5 lg:pb-10 pr-0 md:pr-1 xl:pr-0
`;

const blockLinkClassName = `
  block font-sans-reg my-0 text-dezudiorange
  text-link-sm md:text-link-md lg:text-heading-lg xl:text-link-xl w-sm md:w-auto
`;

const clientsTaglineClassName = `
  font-serif-bold
  col-start-1 tb:col-start-2 lg:col-start-3
  tb:col-end-12 lg:col-end-11 row-start-1 mt-5
  mb-7 tb:mb-6.5 md:pb-12 lg:pb-24
  text-black text-center
  text-tagline-2xs md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
  xl:tracking-loose
`;

const clientsSectionBodyClassName = `
  text-3xs lg:text-xs xl:text-base-tight text-blue-dark
  col-start-1 tb:col-start-2 xl:col-start-3
  tb:col-end-12 xl:col-end-11 row-start-2 tb:row-start-3 text-center
`;

const clientLogoClassName = 'w-logo-sm md:w-logo-md lg:w-logo-lg';

const latestTaglineLinkSectionClassName = `
  auto-rows-min grid grid-cols-1 grid-rows-none
  mx-auto w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
  pt-12 pb-9 sm:pb-21.5 md:pb-44 sm:pt-21.5 md:pt-48
  tb:grid-cols-9 tb:grid-rows-1 gap-0 md:gap-x-16 items-center
`;

const latestTaglineBeforeLinkClassName = `
  font-serif-bold
  col-start-1 tb:col-start-1 md:col-start-3 row-start-1
  tb:col-end-7 md:col-end-7 mb-7 tb:mb-0
  text-black text-center tb:text-right
  text-tagline-sm md:text-tagline-lg lg:text-tagline-2xl xl:text-tagline-3xl
  xl:tracking-loose
`;

const latestExternalTaglineLinkClassName = `
  block font-sans-reg text-dezudiorange
  text-link-sm md:text-link-sm-loose lg:text-link-base
  md:col-end-13 tb:col-start-7 lg:col-start-7
  my-0 row-start-2 tb:row-start-1 text-center tb:text-left tb:ml-8 w-37 md:w-auto
`;

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      {/* Understanding Section */}
      <div className="clear-both">
        <section className={understandingSectionClassName}>
          <h3 className={`${understandingTaglineClassName} force-break`}>
            Understanding people,{' '}
            <span className={`break`}>
              helping people understand
              <span className="text-dezudiorange">.</span>
            </span>
          </h3>
          <div className="col-start-1 tb:col-start-1 lg:col-start-1 tb:col-end-8 md:col-end-9 lg:col-end-8 xl:col-end-10 flex font-condensed-lt row-start-2 tb:row-start-3 text-2xs tb:text-xs-callout md:text-sm-tight lg:text-lg xl:text-xl text-black">
            <p className="pb-10 sm:pb-0 md:pr-1 xl:pr-0">
              We&#8217;re a small and mighty information design, interaction
              design and design research consultancy.{' '}
              <Link
                className="border-b lg:border-b-2 border-dezudiorange"
                to="/about"
              >
                Learn more about us.
              </Link>
            </p>
          </div>
        </section>
      </div>

      {/* Believe Section */}
      <div className="clear-both bg-blue-dark">
        <section className={believeSectionClassName}>
          <h3 className={believeTaglineClassName}>
            We believe that design can play an integral role in creating
            positive change<span className="text-dezudiorange">.</span>
          </h3>
        </section>
      </div>

      {/* What We Do Section: Platforms */}
      <div className="clear-both bg-linear-to-b/srgb from-blue-light to-blue">
        <section className={serviceSectionClassName}>
          <h2 className={serviceHeadingClassName}>What We Do</h2>
          <h3 className={platformsTaglineClassName}>
            Platforms that inform decision-making, inspire action, and drive
            positive behaviors.
          </h3>
          <div className={serviceBodyClassName}>
            <p className={inverseServiceParagraphClassName}>
              Our approach to designing digital products is grounded in
              interaction design and user experience best practices. Paired with
              our expertise in information design, we excel at building complex
              and information-heavy web tools and apps.
            </p>
          </div>
          <div className={serviceImageClassName}>
            <StaticImage
              alt="A sample of MyDecision app screenshots"
              className="-m-5"
              loading="eager"
              src="../images/my-decision.png"
            />
          </div>
          <div
            className={`${projectCalloutClassName} bg-black-dark/30 text-white`}
          >
            <h3 className="font-condensed-bold pb-1.5 tb:pb-1 md:pb-1.5 lg:pb-2 xl:pb-3 text-dezudiorange text-heading-sm-tight md:text-heading-sm-tighter lg:text-heading-caption-lg xl:text-heading-2xl-tighter">
              Dezudio + University of Pittsburgh Center for Women&#8217;s Health
              Research and Innovation
            </h3>
            <p className="font-condensed-bk text-4xs-tight md:text-5xs-tight lg:text-xs-callout xl:text-sm">
              MyDecision and MyVoice: Tools to support women in family planning
              and decision making for reproductive health
            </p>
          </div>
        </section>
      </div>

      {/* What We Do Section: Research */}
      <div className="clear-both bg-grey bg-cover bg-no-repeat bg-right-top research-bg">
        <section className={serviceSectionClassName}>
          <h2 className={serviceHeadingClassName}>What We Do</h2>
          <h3 className={researchTaglineClassName}>
            Research that delivers actionable insights at every stage of the
            design process.
          </h3>
          <div className={serviceBodyClassName}>
            <p className={standardServiceParagraphClassName}>
              As design researchers, we specialize in using or creating the
              right methods and research frameworks to meet you where you are.
              We are equally comfortable working at the front end of a design
              process to understand people&#8217;s needs, patterns, and
              behaviors as we are evaluating existing platforms to inform your
              decision-making about what to design next.
            </p>
          </div>
          <div className={researchImageClassName}>
            <StaticImage
              alt="A woman reading"
              className="h-bg-xs -mx-5 my-11.5 tb:my-0"
              objectPosition="right center"
              src="../images/reading.jpg"
            />
          </div>
          <div className={researchCalloutClassName}>
            <h3 className={calloutHeadingClassName}>Dezudio + CooperVision</h3>
            <p className={calloutParagraphClassName}>
              Novel approaches to ethnographic design research to understand the
              experience of presbyopes with vision correction
            </p>
          </div>
        </section>
      </div>

      {/* What We Do Section: Systems */}
      <div className={systemsWrapperClassName}>
        <section className={serviceSectionClassName}>
          <h2 className={serviceHeadingClassName}>What We Do</h2>
          <h3 className={systemsTaglineClassName}>
            Smart, disciplined document systems that get the job done.
          </h3>
          <div className={serviceBodyClassName}>
            <p className={inverseServiceParagraphClassName}>
              We take a rigorous, 360-degree approach to help organizations
              communicate with purpose, including design and content strategy.
              We bring clarity and focus to your key messages and reinforce them
              through consistent design decisions. The more data, the better: we
              delight in making your information understandable to your target
              audience.
            </p>
          </div>
          <div className={serviceImageClassName}>
            <StaticImage
              alt="A sample document system"
              src="../images/access.png"
            />
          </div>
          <div className={darkCalloutClassName}>
            <h3 className={calloutHeadingClassName}>Dezudio + ACCESS</h3>
            <p className={calloutParagraphClassName}>
              Communication system for paratransit program serving people with
              disabilities and older adults
            </p>
          </div>
        </section>
      </div>

      {/* What We Do Section: Process */}
      <div className={processWrapperClassName}>
        <section className={serviceSectionClassName}>
          <h2 className={serviceHeadingClassName}>What We Do</h2>
          <h3 className={standardTaglineClassName}>
            Design processes that gather stakeholders around a common challenge.
          </h3>
          <div className={serviceBodyClassName}>
            <p className={standardServiceParagraphClassName}>
              As experienced facilitators, we design and implement targeted
              processes to make progress on pressing challenges. We work with
              our clients collaboratively to articulate objectives and key
              questions, design the experience, and capture information
              throughout—always with an eye toward the end goal of sharing the
              outcomes and what we learned.
            </p>
          </div>
          <div className={researchProcessImageClassName}>
            <StaticImage
              alt="Edifice of Brooklyn LAB Charter School"
              className="h-bg-2xs -mx-5 my-11.5 tb:my-0"
              src="../images/brooklyn.jpg"
            />
          </div>
          <div className={researchCalloutClassName}>
            <h3 className={calloutHeadingClassName}>
              Dezudio + Brooklyn LAB Charter School
            </h3>
            <p className={calloutParagraphClassName}>
              Tools, strategies, and communications for school reopening during
              COVID-19
            </p>
          </div>
        </section>
      </div>

      {/* What We Do Section: Strategy */}
      <div className={strategyWrapperClassName}>
        <section className={serviceSectionClassName}>
          <h2 className={serviceHeadingClassName}>What We Do</h2>
          <h3 className={standardTaglineClassName}>
            Digital strategy for organizations looking to inform, engage, and
            inspire.
          </h3>
          <div className={serviceBodyClassName}>
            <p className={standardServiceParagraphClassName}>
              We investigate, strategize, design, and develop for your digital
              ecosystem, whether your web presence is a single site or spans
              across multiple domains. We are laser-focused on maintaining your
              brand identity across a consistent user experience.
            </p>
          </div>
          <div className={strategyImageClassName}>
            <StaticImage
              alt="A sampling of the Genetics Society of America branding"
              className="-mx-5"
              objectFit="stretch"
              src="../images/gsa.png"
            />
          </div>
          <div className={researchCalloutClassName}>
            <h3 className={calloutHeadingClassName}>
              Dezudio + Genetics Society of America
            </h3>
            <p className={calloutParagraphClassName}>
              Ongoing identity, communication, web design, and technology
              strategy
            </p>
          </div>
        </section>
      </div>

      {/* What We Do Section: Workshops */}
      <div className={workshopsWrapperClassName}>
        <section className={serviceSectionClassName}>
          <h2 className={serviceHeadingClassName}>What We Do</h2>
          <h3 className={standardTaglineClassName}>
            Workshops and lectures that help teams connect and learn something
            new.
          </h3>
          <div className={serviceBodyClassName}>
            <p className={standardServiceParagraphClassName}>
              As educators, we believe that our teaching practice and our design
              practice are symbiotic. We bring the best of both worlds to
              organizations and communities through interactive workshops and
              engaging curricula on topics including interaction and information
              design, design research, collaboration, and more.
            </p>
          </div>
          <div className={workshopsImageClassName}>
            <StaticImage
              alt="Ashley from Dezudio presenting at a workshop"
              className="h-bg-sm -mx-5 my-11.5 tb:my-0"
              objectFit="cover"
              objectPosition="right center"
              src="../images/ashley.jpg"
            />
          </div>
          <div className={researchCalloutClassName}>
            <h3 className={calloutHeadingClassName}>
              Dezudio + Red Chair Pittsburgh
            </h3>
            <p className={calloutParagraphClassName}>
              Women in UX talk on gender bias in the design workplace
            </p>
          </div>
        </section>
      </div>

      {/* Approach Section */}
      <div className="clear-both">
        <section className={approachSectionClassName}>
          <h2 className={approachHeadingClassName}>Our Approach</h2>
          <h3 className={approachTaglineClassName}>
            We believe that design differentiates powerful products and
            experiences from the rest. Great partnerships are powerful, too.
            Here’s what we bring to the table as partners on every project.
          </h3>
          <div className={approachSectionBodyClassName}>
            <h3 className={approachSubheadingClassName}>
              Understanding People
            </h3>
            <p className={approachParagraphClassName}>
              Research is what makes us great designers. Making sense of things
              by observing and interacting with people is a foundational aspect
              of our design practice. We don’t have a standard formula or secret
              recipe. Instead, we draw from a wealth of research methods and
              frameworks to suit the context and questions we face.
            </p>
            <h3 className={approachSubheadingClassName}>
              Helping People Understand
            </h3>
            <p className={approachParagraphClassName}>
              At its core, our work is about helping people to understand and
              engage with information for themselves, so that they can make
              decisions and take action. We make meaning from data and
              communicate it using proven strategies from the fields of
              information and interaction design. We move from the high-level
              down into the details and back until every element is doing its
              job to help people understand what they need to succeed.
            </p>
            <Link className={blockLinkClassName} to="/about">
              Meet the team &rarr;
            </Link>
          </div>
        </section>
      </div>

      {/* Clients Section */}
      <div className="clear-both bg-grey">
        <section className={serviceSectionClassName}>
          <h3 className={clientsTaglineClassName}>
            We&#8217;ve worked with large companies, small startups, and
            everything in between.
          </h3>
          <div className={clientsSectionBodyClassName}>
            <StaticImage
              alt=""
              className={clientLogoClassName}
              src="../images/companies/GSA-logo.png"
            />
            <StaticImage
              alt="Gates Foundation"
              className={clientLogoClassName}
              src="../images/companies/GatesFoundation-logo.png"
            />
            <StaticImage
              alt="Age Friendly Greater Pittsburgh"
              className={clientLogoClassName}
              src="../images/companies/AFGP-logo.png"
            />
            <StaticImage
              alt="CollegeBoard"
              className={clientLogoClassName}
              src="../images/companies/CollegeBoard-logo.png"
            />
            <StaticImage
              alt="Carnegie Mellon School of Design"
              className={clientLogoClassName}
              src="../images/companies/CarnegieMellonSOD-logo.png"
            />
            <StaticImage
              alt="Intel"
              className={clientLogoClassName}
              src="../images/companies/Intel-logo.png"
            />
            <StaticImage
              alt="Philips"
              className={clientLogoClassName}
              src="../images/companies/Philips-logo.png"
            />
            <StaticImage
              alt="Wilkinsburg Community Development Cooperation"
              className={clientLogoClassName}
              src="../images/companies/WCDC-logo.png"
            />
          </div>
        </section>
      </div>

      {/* Introduce Section */}
      <div className="clear-both">
        <section className={latestTaglineLinkSectionClassName}>
          <h3 className={latestTaglineBeforeLinkClassName}>
            Let us introduce ourselves.
          </h3>
          <a
            className={latestExternalTaglineLinkClassName}
            href="http://dezudio.com/about"
          >
            About us &rarr;
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home - Dezudio</title>;
