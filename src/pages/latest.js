import * as React from 'react';
import tw from "twin.macro";
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/common/layout';
import SubHeading from '../components/latest/headings';
import Section, {
  LatestSection,
  LatestSectionBody,
  LatestSectionP,
  LatestTaglineLinkSection,
  SectionWrapper,
} from '../components/latest/sections';
import {
  AboutUsTagline,
  LatestTaglineBeforeLink,
} from '../components/latest/taglines';
import Link, {
  LatestExternalTaglineLink,
} from '../components/latest/links';

const LatestPage = () => {
  return (
    <Layout pageTitle="Latest">

      {/* Latest Section */}
      <SectionWrapper>
        <LatestSection>
          <SubHeading>Latest</SubHeading>
          <AboutUsTagline>
            Dezudio is always up to something.
          </AboutUsTagline>
          <LatestSectionBody>
            <LatestSectionP>
              As a proud, woman-owned small business, we love independent
              working, and helping others take on entrepreneurial design
              roles as freelancers, independent consultants, and business
              owners.
            </LatestSectionP>
            <LatestSectionP>
              In addition to our design practice, we teach graduate courses in
              design. We are involved with the design communities in our
              respective cities through design organizations and volunteer roles,
              and sometimes speak at conferences. We write occasionally on
              Medium.
            </LatestSectionP>
          </LatestSectionBody>
        </LatestSection>
      </SectionWrapper>

      {/* Follow Us Section */}
      <SectionWrapper>
        <LatestTaglineLinkSection>
          <LatestTaglineBeforeLink>
            Follow us.
          </LatestTaglineBeforeLink>
          <LatestExternalTaglineLink href="https://www.instagram.com/dezudio">
            Go to Instagram &rarr;
          </LatestExternalTaglineLink>
        </LatestTaglineLinkSection>
      </SectionWrapper>
    </Layout>
  );
};
export default LatestPage;
