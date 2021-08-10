import * as React from 'react';
import tw  from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import FooterContainer, {
  FooterContainerWrapper,
} from './containers';
import FooterHeading from './headings';
import Link from '../links';
import Section, {
  AddressSection,
  CopyrightSection,
  SocialImagesWrapper,
  SocialSection,
  WordmarkSection,
} from './sections';

const Footer = ({ children }) => {

  return (
    <FooterContainerWrapper>
      <FooterContainer>
        <WordmarkSection>
          <StaticImage
            alt="Dezudio Wordmark"
            src="../../../images/svg/dezudio-reversed.svg"
          />
        </WordmarkSection>
        <Section>
          <FooterHeading>Say Hello</FooterHeading>
          <address>
            <p>
              <Link href="mailto:info@dezudio.com">
                info@dezudio.com
              </Link>
            </p>
            <p>
              <Link href="tel:+14123423820">
                (412) 342-3820
              </Link>
            </p>
          </address>
        </Section>
        <AddressSection>
          <FooterHeading>Our Address</FooterHeading>
          <address>
            805 Rebecca Avenue<br/>
            Pittsburgh, PA 15221
          </address>
        </AddressSection>
        <SocialSection>
          <FooterHeading>Follow Us</FooterHeading>
          <SocialImagesWrapper>
            <Link href="https://medium.com/dezudio">
              <StaticImage
                alt="Medium"
                src="../../../images/social/medium.svg"
                css={tw`w-10 lg:w-max`}
              />
            </Link>
            <Link href="https://www.linkedin.com/company/dezudio">
              <StaticImage
                alt="LinkedIn"
                src="../../../images/social/linkedin.svg"
                css={tw`w-10 lg:w-max`}
              />
            </Link>
            <Link href="https://www.instagram.com/dezudio/">
              <StaticImage
                alt="Medium"
                src="../../../images/social/instagram.svg"
                css={tw`w-10 lg:w-max`}
              />
            </Link>
          </SocialImagesWrapper>
        </SocialSection>
        <CopyrightSection>
          &copy;Dezudio. All rights reserved.
        </CopyrightSection>
      </FooterContainer>
    </FooterContainerWrapper>
  );
};

export default Footer;
