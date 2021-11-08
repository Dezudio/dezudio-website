import React from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/people/layout';
import Section, {
  ProfileContent,
  SectionP,
  ProfileMainSection,
  ProfileSideSection,
  UlItem,
  UnorderedList,
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
    <Layout pageTitle="Hannah Koenig"
            fromPerson="../ashley-deal"
            toPerson="../raelynn-oleary">
      <StaticImage
				alt="Hannah Koenig Headshot"
				css={tw`
        tb:col-span-2
        tb:justify-self-end md:justify-self-start
        row-span-2
        tb:mr-5 md:mr-0
        h-bio-headshot-sm md:h-bio-headshot-lg tb:h-bio-headshot-tb md:h-bio-headshot-md lg:h-bio-headshot-lg xl:h-bio-headshot-xl
        rounded-full
        w-bio-headshot-sm md:w-bio-headshot-lg tb:w-bio-headshot-tb md:w-bio-headshot-md lg:w-bio-headshot-lg xl:w-bio-headshot-xl
        `}
				objectPosition="center top"
		    src="../../images/headshots/hannah-koenig.jpg"
			/>

      <ProfileTitle>Hannah Koenig, <ProfileTitleSpan>Senior&nbsp;Designer</ProfileTitleSpan></ProfileTitle>
      
      <ProfileContent>
        <ProfileMainSection>
        <SectionP>
          Hannah joined Dezudio in 2020 as a designer, researcher, and strategist with a deep curiosity about how people, organizations, and systems work—and how design methods can help create positive change. At Dezudio, Hannah gets her hands into everything: from working across the design process on research, information, and interaction design projects, to investigating tools and strategies for facilitation and collaboration, to refining organizational infrastructure and processes to firm up our foundation for sustainable growth.
        </SectionP>
        <SectionP>
          Hannah came to design with aspirations of a career in banknote design, leading to her first professional encounter with the federal government at the Bureau of Engraving and Printing. While paper currency endures as an object of fascination, she was most taken by the complexity of processes, systems, and stakeholders involved in its creation. Since that formative experience, she has pursued every opportunity to understand and improve organizations and their outcomes through design.
        </SectionP>
        <SectionP>
          Previously, Hannah worked as a designer and federal contractor at the U.S. Department of State. Her focus was on the integration of evidence-based practices into Public Diplomacy. She collaborated with researchers and program evaluators to translate and communicate research methodology and data into actionable insights for diplomats. She also led the discovery research phase of a multimillion-dollar software development project to improve digital tools for program planning, strategy, budgeting, and reporting at U.S. embassies and consulates around the world.
        </SectionP>
        <SectionP>
          Hannah holds a Master of Professional Studies degree in Design for Interactions from Carnegie Mellon University. She is an alumna of the Brown|RISD Dual Degree Program, with degrees in International Relations from Brown University and Printmaking from the Rhode Island School of Design.
        </SectionP>
        </ProfileMainSection>
        <ProfileSideSection>
          <OnYourProject>Here’s why you want Hannah on your project:</OnYourProject>
          <UnorderedList>
            <UlItem>
              Hannah is a clear, systematic thinker who is able to analyze quickly, choose a workflow or process, and move into execution. She evaluates processes as they are unfolding, is willing to make adjustments, and consistently does what she says she’s going to do. Hannah is equally at home articulating high-level goals as she is proactively and reliably attending to the details and routine required for implementing strategies.
            </UlItem>
            <UlItem>
              Hannah is both open-minded and discerning. She is able to withhold judgment and gather information about as many viewpoints as may exist. Hannah sustains an openness and curiosity about understanding the variables at play and nuances that may arise from their interactions. She is willing to ask difficult questions at the appropriate moments, present a divergent view, and provide the right amount of pushback to help take the discussion to the next level.
            </UlItem>
            <UlItem>
              Hannah brings a deep passion for understanding how people, processes, organizations, and systems work. She’s attuned to thinking about the big picture, but always from the perspective of the people affecting—and affected by—critical design decisions.
            </UlItem>
          </UnorderedList>
        </ProfileSideSection>
      </ProfileContent>
    </Layout>
  );
};
export default AboutPage;
