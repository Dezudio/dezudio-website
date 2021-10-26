import * as React from 'react';
import tw from "twin.macro";
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/common/layout';
import SubHeading from '../components/about/headings';
import Section, {
  AboutUsSectionBody,
  SectionP,
  SectionWrapper,
  TaglineLinkSection,
} from '../components/about/sections';
import {
  AboutUsTagline,
  TaglineBeforeLink,
  LatestTaglineBeforeLink,
} from '../components/about/taglines';
import Link, {
  LatestExternalTaglineLink,
} from '../components/about/links';

const LatestPage = () => {
  return (
    <Layout pageTitle="Latest">

      {/* Latest Section */}
      <SectionWrapper>
        <Section>
          <SubHeading>Latest</SubHeading>
          <AboutUsTagline>
            Dezudio is always up to something.
          </AboutUsTagline>
          <AboutUsSectionBody>
            <SectionP>
              As a proud, woman-owned small business, we love independent
              working, and helping others take on entrepreneurial design
              roles as freelancers, independent consultants, and business
              owners.
            </SectionP>
            <SectionP>
              In addition to our design practice, we teach graduate courses in
              design. We are involved with the design communities in our
              respective cities through design organizations and volunteer roles,
              and sometimes speak at conferences. We write occasionally on
              Medium.
            </SectionP>
          </AboutUsSectionBody>
        </Section>
      </SectionWrapper>


      {/* Follow Us Section */}
      <SectionWrapper>
        <TaglineLinkSection>
          <LatestTaglineBeforeLink>
            Follow us.
          </LatestTaglineBeforeLink>
          <LatestExternalTaglineLink href="https://www.instagram.com/dezudio">
            Go to Instagram &rarr;
          </LatestExternalTaglineLink>
        </TaglineLinkSection>
      </SectionWrapper>
    </Layout>
  );
};
export default LatestPage;
