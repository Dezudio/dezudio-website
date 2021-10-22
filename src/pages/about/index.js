import * as React from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/common/layout';
import SubHeading from '../../components/about/headings';
import {
  BioBlockLink,
  TaglineLink,
} from '../../components/about/links';
import Profile, {
  ProfilesWrapper,
  ProfileName,
  ProfileTitle,
} from '../../components/about/profiles';
import Section, {
  AboutUsSectionBody,
  MeetOurTeamSectionBody,
  SectionP,
  SectionWrapper,
  SectionWrapperGrey,
  TaglineLinkSection,
} from '../../components/about/sections';
import {
  AboutUsTagline,
  TaglineBeforeLink,
} from '../../components/about/taglines';

const AboutPage = () => {
  return (
    <Layout pageTitle="About">

      {/* About Us Section */}
      <SectionWrapper>
        <Section>
          <SubHeading>About Us</SubHeading>
          <AboutUsTagline>
            Dezudio is an information design, interaction design, and design research consultancy with offices in Pittsburgh and Washington, D.C.
          </AboutUsTagline>
          <AboutUsSectionBody>
            <SectionP>
              Design is powerful. It can inform decision-making, inspire action, and drive positive behaviors. At Dezudio, we value research, communication, and education as critical tools in bridging the gap between where we are and where we need to be.
            </SectionP>
            <SectionP>
              Founded in 2011, we are seasoned designers and entrepreneurs with expertise in design research, user experience, interaction design, data-driven reporting, and visual and information design.
            </SectionP>
            <SectionP>
              We are fully committed to a collaborative design process. As an intentionally small team, we work in close partnership with our clients to involve stakeholders and gather input throughout the design process, always with a focus on quality project outcomes.
            </SectionP>
          </AboutUsSectionBody>
        </Section>
      </SectionWrapper>

      {/* Meet Our Team Section */}
      <SectionWrapper>
        <Section>
          <SubHeading>Meet Our Team</SubHeading>
          <MeetOurTeamSectionBody>
          </MeetOurTeamSectionBody>
          <ProfilesWrapper>
            <Profile>
              <StaticImage
						    alt="Raelynn O'Leary Headshot"
                css={tw`
h-headshot-sm md:h-headshot-lg
rounded-full
w-headshot-sm md:w-headshot-lg
`}
						    objectPosition="center top"
		            src="../../images/headshots/raelynn-oleary.jpg"
			        />
              <ProfileName>Raelynn O'Leary</ProfileName>
              <ProfileTitle>Partner</ProfileTitle>
              <BioBlockLink
                to="raelynn-oleary"
                state={{
                  modal: false
                }}>
                Bio &rarr;
              </BioBlockLink>
            </Profile>
            <Profile>
              <StaticImage
						    alt="Ashley Deal Headshot"
						    css={tw`
h-headshot-sm md:h-headshot-lg
rounded-full
w-headshot-sm md:w-headshot-lg
`}
						    objectPosition="center top"
		            src="../../images/headshots/ashley-deal.jpg"
			        />
              <ProfileName>Ashley Deal </ProfileName>
              <ProfileTitle>Partner</ProfileTitle>
              <BioBlockLink
                to="ashley-deal"
                state={{
                  modal: false
                }}>
                Bio &rarr;
              </BioBlockLink>
            </Profile>
            <Profile>
              <StaticImage
						    alt="Hannah Koenig Headshot"
						    css={tw`
overflow-hidden
h-headshot-sm md:h-headshot-lg
rounded-full
w-headshot-sm md:w-headshot-lg
`}
						    objectPosition="center top"
		            src="../../images/headshots/hannah-koenig.jpg"
			        />
              <ProfileName>Hannah Koenig</ProfileName>
              <ProfileTitle>Senior Designer</ProfileTitle>
              <BioBlockLink
                to="hannah-koenig"
                state={{
                  modal: false
                }}>
                Bio &rarr;
              </BioBlockLink>
            </Profile>
          </ProfilesWrapper>
        </Section>
      </SectionWrapper>

      {/* Meet Our Collaborators Section */}
      <SectionWrapper>
        <Section>
          <SubHeading>Meet Our Collaborators</SubHeading>
          <MeetOurTeamSectionBody>
            <SectionP>
              We are proud of our close-knit community of trusted collaborators
              who partner with us on a project-to-project basis.
            </SectionP>
          </MeetOurTeamSectionBody>
          <ProfilesWrapper>
            <Profile>
              <StaticImage
						    alt="Anna Abovyan Headshot"
                css={tw`
h-headshot-sm md:h-headshot-lg
rounded-full
w-headshot-sm md:w-headshot-lg
`}
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
						    alt="Norm Huelsman Headshot"
						    css={tw`
h-headshot-sm md:h-headshot-lg
rounded-full
w-headshot-sm md:w-headshot-lg
`}
						    objectPosition="center top"
		            src="../../images/headshots/norm-huelsman.jpg"
			        />
              <ProfileName>Norm Huelsman</ProfileName>
              <ProfileTitle>Developer</ProfileTitle>
              <BioBlockLink href="https://www.linkedin.com/in/normhuelsman/">
                LinkedIn &rarr;
              </BioBlockLink>
            </Profile>
            <Profile>
              <StaticImage
						    alt="Meg Richards Headshot"
						    css={tw`
h-headshot-sm md:h-headshot-lg
rounded-full
w-headshot-sm md:w-headshot-lg
`}
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
        </Section>
      </SectionWrapper>

      {/* Introduce Yourself Section */}
      <SectionWrapperGrey>
        <TaglineLinkSection>
          <TaglineBeforeLink>
            Tell us about yourself.
          </TaglineBeforeLink>
          <TaglineLink href="mailto:info@dezudio.com">
            Contact us &rarr;
          </TaglineLink>
        </TaglineLinkSection>
      </SectionWrapperGrey>
    </Layout>
  );
};
export default AboutPage;
