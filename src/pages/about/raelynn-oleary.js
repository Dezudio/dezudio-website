import React from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/people/layout';
import Section, {
  IntroduceYourselfSection,
  IntroduceYourselfSectionWrapper,
  AboutUsSectionBody,
  MeetOurTeamSectionBody,
  SectionP,
  SectionWrapper,
} from '../../components/about/sections';
import {
  BioBlockLink,
  ContactUsBlockLink,
} from '../../components/about/links';
import ProfileTitle, {
  ProfileTitleSpan,
  OnYourProject,
} from '../../components/about/titles';

const AboutPage = () => {
  return (
    <Layout pageTitle="Raelynn O'Leary"
            fromPerson="../hannah-koenig"
            toPerson="../ashley-deal">
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
      <ProfileTitle>Raelynn O'Leary, <ProfileTitleSpan>Partner</ProfileTitleSpan>
      </ProfileTitle>
      <SectionP>
        Raelynn co-founded Dezudio in 2011 with the belief that smart, independent designers and developers could find creative new ways to collaborate with greater autonomy and flexibility than in traditional design consulting models. From the start, the aim was to remain small at the core and agile—building a strong network of creative and technical contractors that she could draw from to bring the strongest, most motivated talent to every project.
      </SectionP>
      <SectionP>
        Her early interest in information design and data visualization brought her to the School of Design at Carnegie Mellon, where she developed a deep respect for design research, and a passion for making meaning visible and accessible. Whether she’s working on research, design, or implementation across products, services, or systems, Raelynn draws from a robust toolkit of design methods and principles to make sense of complexity, to illustrate abstractions, and to foster greater understanding within and across audiences.
      </SectionP>
      <SectionP>
        Raelynn is equally enthusiastic about projects with small nonprofit organizations, university-based research groups, start-ups, and Fortune 500 companies. She has long advocated for the idea that there’s no one-size-fits-all design process, and that designing the process itself is a critical first step in any engagement.
      </SectionP>
      <SectionP>Raelynn earned her Master’s degree in Communication Planning and Information Design from the School of Design at Carnegie Mellon University, where she has been an adjunct faculty member since 2015. She brings a practitioner’s experience to teaching interaction design theory and principles, and uses teaching to continually examine and refine her design practice.
      </SectionP>
    </Layout>
  );
};
export default AboutPage;
