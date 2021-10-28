import React from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/people/layout';
import Section, {
  SectionP,
  ProfileMainSection,
  ProfileSideSection,
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
      <ProfileMainSection>
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
      <SectionP>
        Raelynn earned her Master’s degree in Communication Planning and Information Design from the School of Design at Carnegie Mellon University, where she has been an adjunct faculty member since 2015. She brings a practitioner’s experience to teaching interaction design theory and principles, and uses teaching to continually examine and refine her design practice.
      </SectionP>
      </ProfileMainSection>
      <ProfileSideSection>
      <SectionP>
        <OnYourProject>Here’s why you want Raelynn on your project:</OnYourProject>
        <ul>
          <li>
            Raelynn trusts the design process inherently, which means she’s able to keep her eyes fixed on the horizon—even when things get choppy. In the most difficult moments, Raelynn is able to find the next step to keep a project moving forward. This “steady on” approach yields results; she conveys a calm determination that helps her teams work through the most daunting challenges.
          </li>
          <li>
            Raelynn is comfortable with uncertainty; she allows space and time for her understanding to evolve, and isn’t stifled by temporary gaps. She can piece together a mental model of big, complex systems incrementally—which allows her to get up to speed quickly, and start making meaningful contributions while others are still getting oriented.
          </li>
          <li>
            She lives and works by a “stronger together” mindset. As a basketball player, Raelynn set records for assists—she could see the court, and knew how to distribute the ball. At work, she believes deeply in the power of a team. Her strength is in her humility. She acknowledges that others hold pieces of the puzzle that we’ve not yet seen, and holds fast to the idea that input from multiple perspectives makes the end result stronger.
          </li>
        </ul>
      </SectionP>
      </ProfileSideSection>
    </Layout>
  );
};
export default AboutPage;
