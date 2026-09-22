import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import FooterContainer, {
  FooterContainerWrapper,
} from './containers';
import FooterHeading from './headings';
import {
  AddressSection,
  CopyrightSection,
  HelloSection,
  SocialImagesWrapper,
  SocialSection,
  WordmarkSection,
} from './sections';

const Footer = ({ children }) => {

  return (
    <FooterContainerWrapper>
      <FooterContainer>
        <WordmarkSection>
          {/* The set heights are slightly taller than the wordmark's own
              proportions, so contain keeps its sides from being cropped. */}
          <StaticImage
            alt="Dezudio Wordmark"
            className="
            tb:h-logo-ft-tbh md:h-logo-ft-mdh lg:h-logo-ft-lgh xl:h-logo-ft-xlh
            w-24 tb:w-logo-ft-tbw md:w-logo-ft-mdw lg:w-logo-ft-lgw xl:w-logo-ft-xlw
            "
            objectFit="contain"
            objectPosition="left center"
            src="../../../images/svg/dezudio-white.svg"
          />
        </WordmarkSection>
        <HelloSection>
          <FooterHeading>Say Hello</FooterHeading>
          <address>
            <p>
              <a href="mailto:info@dezudio.com">
                info@dezudio.com
              </a>
            </p>
          </address>
        </HelloSection>
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
            <a href="https://medium.com/dezudio">
              <StaticImage
                alt="Medium"
                src="../../../images/social/medium.svg"
                className="w-10 lg:w-max"
              />
            </a>
            <a href="https://www.linkedin.com/company/dezudio">
              <StaticImage
                alt="LinkedIn"
                src="../../../images/social/linkedin.svg"
                className="w-10 lg:w-max"
              />
            </a>
            <a href="https://www.instagram.com/dezudio/">
              <StaticImage
                alt="Medium"
                src="../../../images/social/instagram.svg"
                className="w-10 lg:w-max"
              />
            </a>
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
