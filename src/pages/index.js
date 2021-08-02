import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
import { Controller, Scene } from 'react-scrollmagic';
import { StaticImage } from 'gatsby-plugin-image';
import DezudiDot from '../components/common/dezudidots';
import Layout from '../components/common/layout';
import Callout, {
  CalloutHeading,
  CalloutP,
  DarkCallout,
} from '../components/index/callouts';
import Heading, {
  ApproachHeading,
  PlatformsHeading,
  SubHeading,
  SystemsHeading,
} from '../components/index/headings';
import {
  AboutUsBlockLink,
  BlockLink,
  InlineLink,
} from '../components/index/links';
import Section, {
  ApproachSection,
  ApproachSectionBody,
  BelieveSection,
  BelieveSectionWrapper,
  ClientsSectionBody,
  ClientsSectionWrapper,
  IntroduceSection,
  InverseSectionP,
  PlatformsSectionWrapper,
  ProcessSectionWrapper,
  ResearchSectionWrapper,
  SectionBody,
  SectionImage,
  SectionImageBG,
  SectionP,
  SectionWrapper,
  StrategySectionImage,
  StrategySectionWrapper,
  SystemsSectionWrapper,
  UnderstandingSection,
  UnderstandingSectionBody,
  WorkshopsSectionWrapper,
} from '../components/index/sections';
import Tagline, {
  ApproachTagline,
  BelieveTagline,
  ClientsTagline,
  IntroduceTagline,
  PlatformsTagline,
  SystemsTagline,
  UnderstandingTagline,
} from '../components/index/taglines';


const IndexPage = () => {
  const twConfig = resolveConfig(tailwindConfig);
  const mdScreenBreak = twConfig.theme.screens.md;

  // Scroll Pinning (initial & on window resize)
  const [scrollEnabled, setScrollEnabled] = useState(0);
  useEffect( () => {
    if (typeof window === 'undefined') return;
    const getScrollEnabled = () => {
      //const { innerWidth: width } = window;
      //return (width > parseInt(mdScreenBreak)); // disable on mobile
      return false;
    };
    setScrollEnabled(getScrollEnabled()); // set initial value
    const handleResize = () => setScrollEnabled(getScrollEnabled());
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); }
  },[mdScreenBreak]);

	return(
		<Layout pageTitle="Home">
		  <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>

		    {/* Understanding Section */}
			  <SectionWrapper>
			    <UnderstandingSection>
			      <UnderstandingTagline>
			        Understanding people,
		          helping people understand<DezudiDot>.</DezudiDot>
			      </UnderstandingTagline>
			      <UnderstandingSectionBody>
			        <SectionP>
			          We're a small and mighty information design, interaction
								design and design research
								consultancy. <InlineLink to="/about">
                               Learn more about us.
                             </InlineLink>
							</SectionP>
						</UnderstandingSectionBody>
					</UnderstandingSection>
				</SectionWrapper>


				{/* Believe Section */}
				<BelieveSectionWrapper>
					<BelieveSection>
						<BelieveTagline>
							We believe that design can play an integral role
							in creating positive change<DezudiDot>.</DezudiDot>
						</BelieveTagline>
					</BelieveSection>
				</BelieveSectionWrapper>


				{/* What We Do Section: Platforms */}
				<PlatformsSectionWrapper>
					<Section>
						<PlatformsHeading>
							<Scene duration={'0'} offset={-50} indicators={false} pin={{ pushFollowers: true }} enabled={scrollEnabled}>
								<div>
									What We Do
								</div>
							</Scene>
						</PlatformsHeading>
						<PlatformsTagline>
							<Scene duration={0} enabled={scrollEnabled} offset={0} pin={{ pushFollowers: false }}>
								<div>
									Platforms that inform decision-making, inspire action, and
                  drive positive behaviors.
								</div>
							</Scene>
						</PlatformsTagline>
						<SectionBody>
							<Scene duration={'0'} enabled={scrollEnabled} offset={0} pin={{ pushFollowers: false }}>
								<div>
									<InverseSectionP>
										Our approach to designing digital products is grounded in
										interaction design and user experience best practices.
										Paired with our expertise in information design, we excel at
										building complex and information-heavy web tools and apps.
									</InverseSectionP>
								</div>
							</Scene>
						</SectionBody>
						<SectionImage>
							<StaticImage
								alt="A sample of MyDecision app screenshots"
								css={tw`-m-5`}
                loading="eager"
								src="../images/my-decision.png"
							/>
						</SectionImage>
						<DarkCallout>
							<CalloutHeading>
								Dezudio + University of Pittsburgh Center for Women's Health
								Research and Innovation
							</CalloutHeading>
							<CalloutP>
								MyDecision and MyVoice: Tools to support women in family
								planning and decision making for reproductive health
							</CalloutP>
						</DarkCallout>
					</Section>
				</PlatformsSectionWrapper>


				{/* What We Do Section: Research */}
        <ResearchSectionWrapper>
				  <Section>
				    <Heading>What We Do</Heading>
						<Tagline>
							Research that delivers actionable insights at every stage of
							the design process.
						</Tagline>
						<SectionBody>
							<SectionP>
								As design researchers, we specialize in using or creating the
								right methods and research frameworks to meet you where you
								are. We are equally comfortable working at the front end of a
								design process to understand people’s needs, patterns, and
								behaviors as we are evaluating existing platforms to inform
								your decision-making about what to design next.
							</SectionP>
		        </SectionBody>
						<SectionImageBG>
							<StaticImage
								alt="A woman reading"
								css={tw`h-bg-xs -mx-5`}
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
						<SystemsHeading>What We Do</SystemsHeading>
						<SystemsTagline>
							Smart, disciplined document systems that get the job done.
						</SystemsTagline>
						<SectionBody>
							<InverseSectionP>
								We take a rigorous, 360-degree approach to help organizations
								communicate with purpose, including design and content
								strategy. We bring clarity and focus to your key messages and
								reinforce them through consistent design decisions. The more
								data, the better: we delight in making your information
								understandable to your target audience.
							</InverseSectionP>
						</SectionBody>
						<SectionImage>
							<StaticImage
								alt="A sample document system"
								src="../images/access.png"
							/>
						</SectionImage>
						<DarkCallout>
							<CalloutHeading>
								Dezudio + ACCESS
							</CalloutHeading>
							<CalloutP>
								Communication system for ADA and elderly transit service riders
							</CalloutP>
						</DarkCallout>
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
							<SectionP>
								As experienced facilitators, we design and implement
								targeted processes to make progress on pressing challenges.
								We work with our clients collaboratively to articulate
								objectives and key questions, design the experience, and
								capture information throughout—always with an eye toward
								the end goal of sharing the outcomes and what we learned.
							</SectionP>
						</SectionBody>
						<SectionImageBG>
							<StaticImage
								alt="Edifice of Brooklyn LAB Charter School"
								css={tw`h-bg-2xs -mx-5`}
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
							<SectionP>
								We investigate, strategize, design, and develop for your
								digital ecosystem, whether your web presence is a single
								site or spans across multiple domains. We are laser-focused
								on maintaining your brand identity across a consistent user
								experience.
							</SectionP>
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
              <SectionP>
                As educators, we believe that our teaching practice and our
                design practice are symbiotic. We bring the best of both worlds
                to organizations and communities through interactive workshops
                and engaging curricula on topics including interaction and
                information design, design research, collaboration, and more.
              </SectionP>
            </SectionBody>
            <SectionImageBG>
              <StaticImage
                alt="Ashley from Dezudio presenting at a workshop"
                css={tw`h-bg-sm -mx-5`}
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
              <SubHeading>Understanding People</SubHeading>
              <SectionP>
                Research is what makes us great designers. Making sense of
                things by observing and interacting with people is a
                foundational aspect of our design practice. We don’t have a
                standard formula or secret recipe. Instead, we draw from a
                wealth of research methods and frameworks to suit the context
                and questions we face.
              </SectionP>
              <SubHeading>Helping People Understand</SubHeading>
              <SectionP>
                At its core, our work is about helping people to understand and
                engage with information for themselves, so that they can make
                decisions and take action. We make meaning from data and
                communicate it using proven strategies from the fields of
                information and interaction design. We move from the high-level
                down into the details and back until every element is doing its
                job to help people understand what they need to succeed.
              </SectionP>
              <BlockLink to="/about">Meet the team &rarr;</BlockLink>
            </ApproachSectionBody>
          </ApproachSection>
        </SectionWrapper>


        {/* Clients Section */}
        <ClientsSectionWrapper>
          <Section>
            <ClientsTagline>
              We've worked with large companies, small startups, and
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
        </ClientsSectionWrapper>


        {/* Introduce Section */}
        <SectionWrapper>
          <IntroduceSection>
            <IntroduceTagline>
              Let us introduce ourselves.
            </IntroduceTagline>
            <AboutUsBlockLink to="/about">
              About us &rarr;
            </AboutUsBlockLink>
          </IntroduceSection>
        </SectionWrapper>
      </Controller>
    </Layout>
  );
};
export default IndexPage;
