import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/Layout';
import {
  SubHeading,
  CollaboratorsHeading,
} from '../../components/about/headings';
import {
  BioBlockLink,
  LatestExternalTaglineLink,
} from '../../components/about/links';
import Profile, {
  ProfilesWrapper,
  ProfileName,
  ProfileTitle,
  teamProfileImageClassName,
} from '../../components/about/profiles';
import {
  AboutSection,
  AboutUsSectionBody,
  AboutSectionP,
  LatestTaglineLinkSection,
  MeetOurTeamSectionBody,
  MeetOurTeamSectionP,
  SectionWrapper,
  SectionWrapperGrey,
  TeamsSection,
} from '../../components/about/sections';
import {
  AboutUsTagline,
  LatestTaglineBeforeLink,
} from '../../components/about/taglines';

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      {/* About Us Section */}
      <SectionWrapper>
        <AboutSection>
          <SubHeading>About Us</SubHeading>
          <AboutUsTagline>
            Dezudio is an information design, interaction design, and design
            research consultancy based in Pittsburgh.
          </AboutUsTagline>
          <AboutUsSectionBody>
            <AboutSectionP>
              Design is powerful. It can inform decision-making, inspire action,
              and drive positive behaviors. At Dezudio, we value research,
              communication, and education as critical tools in bridging the gap
              between where we are and where we need to be.
            </AboutSectionP>
            <AboutSectionP>
              Founded in 2011, we are seasoned designers and entrepreneurs with
              expertise in design research, user experience, interaction design,
              data-driven reporting, and visual and information design.
            </AboutSectionP>
            <AboutSectionP>
              We are fully committed to a collaborative design process. As an
              intentionally small team, we work in close partnership with our
              clients to involve stakeholders and gather input throughout the
              design process, always with a focus on quality project outcomes.
            </AboutSectionP>
          </AboutUsSectionBody>
        </AboutSection>
      </SectionWrapper>

      {/* Meet Our Team Section */}
      <SectionWrapper>
        <TeamsSection>
          <SubHeading>Meet Our Team</SubHeading>
          <ProfilesWrapper>
            <Profile>
              <StaticImage
                className={teamProfileImageClassName}
                alt="Raelynn O'Leary Headshot"
                objectPosition="center top"
                src="../../images/headshots/raelynn-oleary.jpg"
              />
              <ProfileName>Raelynn O&apos;Leary</ProfileName>
              <ProfileTitle>Partner</ProfileTitle>
              <BioBlockLink
                to="raelynn-oleary"
                state={{
                  modal: false,
                }}
              >
                Bio &rarr;
              </BioBlockLink>
            </Profile>
            <Profile>
              <StaticImage
                className={teamProfileImageClassName}
                alt="Ashley Deal Headshot"
                objectPosition="center top"
                src="../../images/headshots/ashley-deal.jpg"
              />
              <ProfileName>Ashley Deal </ProfileName>
              <ProfileTitle>Partner</ProfileTitle>
              <BioBlockLink
                to="ashley-deal"
                state={{
                  modal: false,
                }}
              >
                Bio &rarr;
              </BioBlockLink>
            </Profile>
          </ProfilesWrapper>
        </TeamsSection>
      </SectionWrapper>

      {/* Meet Our Collaborators Section */}
      <SectionWrapper>
        <TeamsSection>
          <CollaboratorsHeading>Meet Our Collaborators</CollaboratorsHeading>
          <MeetOurTeamSectionBody>
            <MeetOurTeamSectionP>
              We are proud of our close-knit community of trusted collaborators
              who partner with us on a project-to-project basis.
            </MeetOurTeamSectionP>
          </MeetOurTeamSectionBody>
          <ProfilesWrapper>
            <Profile>
              <StaticImage
                className={teamProfileImageClassName}
                alt="Anna Abovyan Headshot"
                objectPosition="center top"
                src="../../images/headshots/anna-abovyan.jpg"
              />
              <ProfileName>Anna Abovyan</ProfileName>
              <ProfileTitle>Designer and Strategist</ProfileTitle>
              <BioBlockLink href="https://www.linkedin.com/in/annaabovyan/">
                LinkedIn &rarr;
              </BioBlockLink>
            </Profile>
            <Profile>
              <StaticImage
                className={teamProfileImageClassName}
                alt="Ulu Mills Headshot"
                objectPosition="center top"
                src="../../images/headshots/ulu-mills.jpg"
              />
              <ProfileName>Ulu Mills</ProfileName>
              <ProfileTitle>Designer</ProfileTitle>
              <BioBlockLink href="https://www.linkedin.com/in/ulumills/">
                LinkedIn &rarr;
              </BioBlockLink>
            </Profile>
            <Profile>
              <StaticImage
                className={teamProfileImageClassName}
                alt="Norman Huelsman Headshot"
                objectPosition="center top"
                src="../../images/headshots/norm-huelsman.jpg"
              />
              <ProfileName>Norman Huelsman</ProfileName>
              <ProfileTitle>Developer</ProfileTitle>
              <BioBlockLink href="https://www.linkedin.com/in/normhuelsman/">
                LinkedIn &rarr;
              </BioBlockLink>
            </Profile>
            <Profile>
              <StaticImage
                className={teamProfileImageClassName}
                alt="Meg Richards Headshot"
                objectPosition="center top"
                src="../../images/headshots/meg-richards.jpg"
              />
              <ProfileName>Meg Richards</ProfileName>
              <ProfileTitle>Technology Advisor</ProfileTitle>
              <BioBlockLink href="https://www.linkedin.com/in/merichar/">
                LinkedIn &rarr;
              </BioBlockLink>
            </Profile>
          </ProfilesWrapper>
        </TeamsSection>
      </SectionWrapper>

      {/* Introduce Yourself Section */}
      <SectionWrapperGrey>
        <LatestTaglineLinkSection>
          <LatestTaglineBeforeLink>
            Tell us about yourself.
          </LatestTaglineBeforeLink>
          <LatestExternalTaglineLink href="mailto:info@dezudio.com">
            Contact us &rarr;
          </LatestExternalTaglineLink>
        </LatestTaglineLinkSection>
      </SectionWrapperGrey>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About - Dezudio</title>;
