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
    <Layout pageTitle="Ashley Deal"
            fromPerson="../raelynn-oleary"
            toPerson="../hannah-koenig">
      <StaticImage
				alt="Ashley Deal Headshot"
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
		    src="../../images/headshots/ashley-deal.jpg"
			/>
      
      <ProfileTitle>Ashley Deal, <ProfileTitleSpan>Partner</ProfileTitleSpan></ProfileTitle>

      <ProfileContent>
        <ProfileMainSection>
        <SectionP>
          After a decade of professional practice and two years of independent contracting, Ashley joined Dezudio in 2013—eager for the new opportunities and challenges that would emerge from the partnership. She brought a focus on building strong client relationships, and a dedication to completing projects where the results speak for themselves.
        </SectionP>
        <SectionP>
          Through her work, Ashley aims to create compelling stories from complex information and abstract data, and transform confusing or frustrating processes into smooth, seamless interactions. She has extensive background designing communications and interactive experiences that communicate information effectively, inspire action, and drive positive behaviors.
        </SectionP>
        <SectionP>
          Ashley’s career as an information and interaction designer includes considerable experience in education, healthcare, and design research for new product development. The underlying thread through her body of work is helping people understand each other, and helping them access and internalize important information they need to make critical decisions.
        </SectionP>
        <SectionP>
          Ashley holds a Bachelor of Arts from Vanderbilt University, and a Masters in Design from Carnegie Mellon University, where she has been an adjunct faculty member in the School of Design since 2015. As an educator, Ashley focuses on the fundamentals of working intentionally, establishing a strong narrative, and clean, precise execution of concepts. She is energized and heartened by her connections and interactions with the next generation of designers and design leaders.
        </SectionP>
        </ProfileMainSection>
        <ProfileSideSection>
          <OnYourProject>Here’s why you want Ashley on your project:</OnYourProject>
          <UnorderedList>
            <UlItem>
              Ashley toggles seamlessly between the big picture and the details—she defines the strategy for an initiative, and contemplates subtle distinctions in line weight and typographic choices. She respects precision and craft. You’re just as likely to find her asking “Why does it matter?” as “How should it be?”
            </UlItem>
            <UlItem>
              Ashley is always absorbing and synthesizing new information, ideas, and perspectives, culling across domains and her own experience to spark ideas for a project. She has a knack for seeing connections among data and readily articulating their significance so that others can meaningfully engage with information for themselves.
            </UlItem>
            <UlItem>
              Ashley is a source of positive energy and sets a tone of warmth and enthusiasm among her collaborators. She inspires others to be as excited as she is about a vision or direction, and creates cohesion and momentum by encouraging a team to focus on the shared goal of creating the best possible solution.
            </UlItem>
          </UnorderedList>
        </ProfileSideSection>
      </ProfileContent>
    </Layout>
  );
};
export default AboutPage;
