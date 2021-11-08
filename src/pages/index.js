import React from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import DezudiDot from '../components/common/dezudidots';
import Layout from '../components/common/layout';
import Callout, {
  CalloutDark,
  CalloutHeading,
  CalloutP,
} from '../components/index/callouts';
import Heading, {
  HeadingSub,
  ApproachHeading,
} from '../components/index/headings';
import {
  LatestExternalTaglineLink,
  BlockLink,
  InlineLink,
} from '../components/index/links';
import Section, {
  ApproachSection,
  ApproachSectionBody,
  ApproachSectionP,
  BelieveSection,
  ClientsSectionBody,
  LatestTaglineLinkSection,
  PlatformsSectionWrapper,
  ProcessSectionWrapper,
  ResearchSectionWrapper,
  SectionBody,
  SectionImage,
  SectionImageBG,
  SectionWrapper,
  SectionWrapperBlueDark,
  SectionWrapperGrey,
  StrategySectionImage,
  StrategySectionWrapper,
  SystemsSectionWrapper,
  UnderstandingSection,
  UnderstandingSectionBody,
  UnderstandingSectionP,
  WhatWeDoSectionP,
  WhatWeDoSectionPInverse,
  WorkshopsSectionWrapper,
} from '../components/index/sections';
import Tagline, {
  ApproachTagline,
  BelieveTagline,
  ClientsTagline,
  PlatformsTagline,
  SystemsTagline,
  LatestTaglineBeforeLink,
  UnderstandingTagline,
} from '../components/index/taglines';

const IndexPage = () => {

	return(
		<Layout pageTitle="Home">

		  {/* Understanding Section */}
			<SectionWrapper>
			  <UnderstandingSection>
			    <UnderstandingTagline className={`force-break`}>
			      Understanding people, <span>helping people understand<DezudiDot>.</DezudiDot></span>
			    </UnderstandingTagline>
			    <UnderstandingSectionBody>
			      <UnderstandingSectionP>
			        We&#8217;re a small and mighty information design, interaction
		          design and design research
		          consultancy. <InlineLink to="/about">Learn more about us.</InlineLink>
			      </UnderstandingSectionP>
			    </UnderstandingSectionBody>
				</UnderstandingSection>
			</SectionWrapper>


		  {/* Believe Section */}
			<SectionWrapperBlueDark>
			  <BelieveSection>
			    <BelieveTagline>
			      We believe that design can play an integral role
			      in creating positive change<DezudiDot>.</DezudiDot>
			    </BelieveTagline>
				</BelieveSection>
			</SectionWrapperBlueDark>


			{/* What We Do Section: Platforms */}
			<PlatformsSectionWrapper>
				<Section>
					<Heading>
						What We Do
					</Heading>
					<PlatformsTagline>
						Platforms that inform decision-making, inspire action, and drive positive behaviors.
					</PlatformsTagline>
					<SectionBody>
						<WhatWeDoSectionPInverse>
							Our approach to designing digital products is grounded in
							interaction design and user experience best practices.
							Paired with our expertise in information design, we excel at
							building complex and information-heavy web tools and apps.
						</WhatWeDoSectionPInverse>
					</SectionBody>
					<SectionImage>
						<StaticImage
							alt="A sample of MyDecision app screenshots"
							css={tw`-m-5`}
              loading="eager"
							src="../images/my-decision.png"
						/>
					</SectionImage>
					<CalloutDark>
						<CalloutHeading>
							Dezudio + University of Pittsburgh Center for Women&#8217;s Health
							Research and Innovation
						</CalloutHeading>
						<CalloutP>
							MyDecision and MyVoice: Tools to support women in family
							planning and decision making for reproductive health
						</CalloutP>
					</CalloutDark>
				</Section>
			</PlatformsSectionWrapper>


		  {/* What We Do Section: Research */}
      <ResearchSectionWrapper>
			  <Section>
				  <Heading>What We Do</Heading>
				  <Tagline>
					  Research that delivers actionable insights at every stage of the design process.
				  </Tagline>
				  <SectionBody>
					  <WhatWeDoSectionP>
						  As design researchers, we specialize in using or creating the
						  right methods and research frameworks to meet you where you
						  are. We are equally comfortable working at the front end of a
						  design process to understand people&#8217;s needs, patterns, and
						  behaviors as we are evaluating existing platforms to inform
						  your decision-making about what to design next.
						</WhatWeDoSectionP>
		      </SectionBody>
				  <SectionImageBG>
					  <StaticImage
						  alt="A woman reading"
						  css={tw`h-bg-xs -mx-5 my-11.5 tb:my-0`}
						  objectPosition="right center"
		          src="../images/reading.jpg"
					  />
				  </SectionImageBG>
				  <Callout>
					  <CalloutHeading>
						  Dezudio + CooperVision
					  </CalloutHeading>
					  <CalloutP>
						  Novel approaches to ethnographic design research to understand
						  the experience of presbyopes with vision correction
					  </CalloutP>
		      </Callout>
        </Section>
      </ResearchSectionWrapper>


 			{/* What We Do Section: Systems */}
			<SystemsSectionWrapper>
				<Section>
					<Heading>What We Do</Heading>
					<SystemsTagline>
						Smart, disciplined document systems that get the job done.
					</SystemsTagline>
					<SectionBody>
						<WhatWeDoSectionPInverse>
							We take a rigorous, 360-degree approach to help organizations
							communicate with purpose, including design and content
							strategy. We bring clarity and focus to your key messages and
							reinforce them through consistent design decisions. The more
							data, the better: we delight in making your information
							understandable to your target audience.
						</WhatWeDoSectionPInverse>
					</SectionBody>
					<SectionImage>
						<StaticImage
							alt="A sample document system"
							src="../images/access.png"
						/>
					</SectionImage>
					<CalloutDark>
						<CalloutHeading>
							Dezudio + ACCESS
						</CalloutHeading>
						<CalloutP>
							Communication system for ADA and elderly transit service riders
						</CalloutP>
					</CalloutDark>
				</Section>
			</SystemsSectionWrapper>


      {/* What We Do Section: Process */}
		  <ProcessSectionWrapper>
			  <Section>
				  <Heading>What We Do</Heading>
				  <Tagline>
					  Design processes that gather stakeholders around a common
					  challenge.
				  </Tagline>
				  <SectionBody>
					  <WhatWeDoSectionP>
						  As experienced facilitators, we design and implement
						  targeted processes to make progress on pressing challenges.
						  We work with our clients collaboratively to articulate
						  objectives and key questions, design the experience, and
						  capture information throughout—always with an eye toward
						  the end goal of sharing the outcomes and what we learned.
					  </WhatWeDoSectionP>
				  </SectionBody>
				  <SectionImageBG>
					  <StaticImage
						  alt="Edifice of Brooklyn LAB Charter School"
						  css={tw`h-bg-2xs -mx-5 my-11.5 tb:my-0`}
						  src="../images/brooklyn.jpg"
					  />
				  </SectionImageBG>
				  <Callout>
					  <CalloutHeading>
						  Dezudio + Brooklyn LAB Charter School
					  </CalloutHeading>
					  <CalloutP>
						  Tools, strategies, and communications for school reopening
						  during COVID-19
					  </CalloutP>
				  </Callout>
			  </Section>
		  </ProcessSectionWrapper>


		  {/* What We Do Section: Strategy */}
		  <StrategySectionWrapper>
			  <Section>
				  <Heading>What We Do</Heading>
				  <Tagline>
					  Digital strategy for organizations looking to inform, engage,
					  and inspire.
				  </Tagline>
				  <SectionBody>
					  <WhatWeDoSectionP>
						  We investigate, strategize, design, and develop for your
						  digital ecosystem, whether your web presence is a single
						  site or spans across multiple domains. We are laser-focused
						  on maintaining your brand identity across a consistent user
						  experience.
					  </WhatWeDoSectionP>
          </SectionBody>
          <StrategySectionImage>
            <StaticImage
              alt="A sampling of the Genetics Society of America branding"
              css={tw`-mx-5`}
              objectFit="stretch"
              src="../images/gsa.png"
            />
          </StrategySectionImage>
          <Callout>
            <CalloutHeading>
              Dezudio + Genetics Society of America
            </CalloutHeading>
            <CalloutP>
              Ongoing identity, communication, web design, and
              technology strategy
            </CalloutP>
          </Callout>
        </Section>
      </StrategySectionWrapper>


      {/* What We Do Section: Workshops */}
      <WorkshopsSectionWrapper>
        <Section>
          <Heading>What We Do</Heading>
          <Tagline>
            Workshops and lectures that help teams connect and learn
            something new.
          </Tagline>
          <SectionBody>
            <WhatWeDoSectionP>
              As educators, we believe that our teaching practice and our
              design practice are symbiotic. We bring the best of both worlds
              to organizations and communities through interactive workshops
              and engaging curricula on topics including interaction and
              information design, design research, collaboration, and more.
            </WhatWeDoSectionP>
          </SectionBody>
          <SectionImageBG>
            <StaticImage
              alt="Ashley from Dezudio presenting at a workshop"
              css={tw`h-bg-sm -mx-5 my-11.5 tb:my-0`}
              objectFit="cover"
              objectPosition="right center"
              src="../images/ashley.jpg"
            />
          </SectionImageBG>
          <Callout>
            <CalloutHeading>
              Dezudio + Red Chair Pittsburgh
            </CalloutHeading>
            <CalloutP>
              Women in UX talk on gender bias in the design workplace
            </CalloutP>
          </Callout>
        </Section>
      </WorkshopsSectionWrapper>


      {/* Approach Section */}
      <SectionWrapper>
        <ApproachSection>
          <ApproachHeading>Our Approach</ApproachHeading>
          <ApproachTagline>
            We believe that design differentiates powerful products and
            experiences from the rest. Great partnerships are powerful,
            too. Here’s what we bring to the table as partners on every
            project.
          </ApproachTagline>
          <ApproachSectionBody>
            <HeadingSub>Understanding People</HeadingSub>
            <ApproachSectionP>
              Research is what makes us great designers. Making sense of
              things by observing and interacting with people is a
              foundational aspect of our design practice. We don’t have a
              standard formula or secret recipe. Instead, we draw from a
              wealth of research methods and frameworks to suit the context
              and questions we face.
            </ApproachSectionP>
            <HeadingSub>Helping People Understand</HeadingSub>
            <ApproachSectionP>
              At its core, our work is about helping people to understand and
              engage with information for themselves, so that they can make
              decisions and take action. We make meaning from data and
              communicate it using proven strategies from the fields of
              information and interaction design. We move from the high-level
              down into the details and back until every element is doing its
              job to help people understand what they need to succeed.
            </ApproachSectionP>
            <BlockLink to="/about">Meet the team &rarr;</BlockLink>
          </ApproachSectionBody>
        </ApproachSection>
      </SectionWrapper>


      {/* Clients Section */}
      <SectionWrapperGrey>
        <Section>
          <ClientsTagline>
            We&#8217;ve worked with large companies, small startups, and
            everything in between.
          </ClientsTagline>
          <ClientsSectionBody>
            <StaticImage alt=""
                         css={tw`w-logo-sm md:w-logo-md lg:w-logo-lg`}
                         src="../images/companies/GSA-logo.png"/>
            <StaticImage alt="Gates Foundation"
                         css={tw`w-logo-sm md:w-logo-md lg:w-logo-lg`}
                         src="../images/companies/GatesFoundation-logo.png"/>
            <StaticImage alt="Age Friendly Greater Pittsburgh"
                         css={tw`w-logo-sm md:w-logo-md lg:w-logo-lg`}
                         src="../images/companies/AFGP-logo.png"/>
            <StaticImage alt="CollegeBoard"
                         css={tw`w-logo-sm md:w-logo-md lg:w-logo-lg`}
                         src="../images/companies/CollegeBoard-logo.png"/>
            <StaticImage alt="Carnegie Mellon School of Design"
                         css={tw`w-logo-sm md:w-logo-md lg:w-logo-lg`}
                         src="../images/companies/CarnegieMellonSOD-logo.png"/>
            <StaticImage alt="Intel"
                         css={tw`w-logo-sm md:w-logo-md lg:w-logo-lg`}
                         src="../images/companies/Intel-logo.png"/>
            <StaticImage alt="Philips"
                         css={tw`w-logo-sm md:w-logo-md lg:w-logo-lg`}
                         src="../images/companies/Philips-logo.png"/>
            <StaticImage alt="Wilkinsburg Community Development Cooperation"
                         css={tw`w-logo-sm md:w-logo-md lg:w-logo-lg`}
                         src="../images/companies/WCDC-logo.png" />
          </ClientsSectionBody>
        </Section>
      </SectionWrapperGrey>

      {/* Introduce Section */}
      <SectionWrapper>
        <LatestTaglineLinkSection>
          <LatestTaglineBeforeLink>
            Let us introduce ourselves.
          </LatestTaglineBeforeLink>
          <LatestExternalTaglineLink to="/about">
            About us &rarr;
          </LatestExternalTaglineLink>
        </LatestTaglineLinkSection>
      </SectionWrapper>

    </Layout>
  );
};

export default IndexPage;
