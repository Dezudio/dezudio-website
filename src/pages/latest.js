import * as React from 'react';
import tw from "twin.macro";
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/common/layout';
import {
  AboutHeading,
} from '../components/about/headings';
import {
  AboutUsTagline,
} from '../components/about/taglines';
import Section, {
  AboutUsSectionBody,
  SectionP,
  SectionWrapper,
} from '../components/about/sections';

const LatestPage = () => {
  return (
    <Layout pageTitle="Latest">

      {/* Latest Section */}
      <SectionWrapper>
        <Section>
          <AboutHeading>Latest</AboutHeading>
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

     </Layout>
  );
};
export default LatestPage;
