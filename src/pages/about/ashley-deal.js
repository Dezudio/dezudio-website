import React from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/people/layout';
import Section, {
  SectionP,
  SectionWrapper,
} from '../../components/about/sections';
import {
  BioBlockLink,
  ContactUsBlockLink,
} from '../../components/about/links';
import ProfileTitle, {
  ProfileTitleStrong
} from '../../components/about/titles';

const AboutPage = () => {
  return (
    <Layout pageTitle="Ashley Deal"
            fromPerson="../raelynn-oleary"
            toPerson="../hannah-koenig">
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
      <ProfileTitle>Ashley Deal,
        <ProfileTitleStrong>Partner</ProfileTitleStrong>
      </ProfileTitle>
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
        Ashley holds a Bachelor of Arts from Vanderbilt University, and a Masters in Design from Carnegie Mellon University, where she has been an adjunct faculty member in the School of Design since 2015. As an educator, Ashley focuses on the fundamentals of working intentionally, establishing a strong narrative, and clean, precise execution of concepts. She is energized and heartened by her connections and interactions with the next generation of designers and design leaders. She also likes koalas.
      </SectionP>

      <SectionP>
        Here’s why you want Ashley on your project:
        <ul>
          <li>
            Ashley toggles seamlessly between the big picture and the details—she defines the strategy for an initiative, and contemplates subtle distinctions in line weight and typographic choices. She respects precision and craft. You’re just as likely to find her asking “Why does it matter?” as “How should it be?”
          </li>
          <li>
            Ashley is always absorbing and synthesizing new information, ideas, and perspectives, culling across domains and her own experience to spark ideas for a project. She has a knack for seeing connections among data and readily articulating their significance so that others can meaningfully engage with information for themselves.
          </li>
          <li>
            Ashley is a source of positive energy and sets a tone of warmth and enthusiasm among her collaborators. She inspires others to be as excited as she is about a vision or direction, and creates cohesion and momentum by encouraging a team to focus on the shared goal of creating the best possible solution.
          </li>
        </ul>
      </SectionP>
    </Layout>
  );
};
export default AboutPage;
