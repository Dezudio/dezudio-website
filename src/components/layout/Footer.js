import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => (
  <div className="bg-blue-dark clear-both">
    <footer className="grid justify-start tb:justify-evenly grid-cols-1 tb:grid-cols-12 font-sans-reg mx-auto px-4 pb-9 md:pb-27 lg:pb-40 pt-15 md:pt-27 lg:pt-40 xl:pt-40.5 text-footer-lg lg:text-footer-lg2 xl:text-footer-xl text-white">
      <section className="col-start-1 lg:col-start-2 row-start-1 tb:col-span-4 md:col-span-3 mb-15 md:mb-0 md:pt-10 xl:w-md">
        <StaticImage
          alt="Dezudio Wordmark"
          className="tb:h-logo-ft-tbh md:h-logo-ft-mdh lg:h-logo-ft-lgh xl:h-logo-ft-xlh w-24 tb:w-logo-ft-tbw md:w-logo-ft-mdw lg:w-logo-ft-lgw xl:w-logo-ft-xlw"
          objectFit="contain"
          objectPosition="left center"
          src="../../images/svg/dezudio-white.svg"
        />
      </section>
      <section className="col-start-1 tb:row-start-2 md:row-start-1 tb:col-span-4 md:col-span-3 lg:col-span-2 mb-16 md:mb-0">
        <h2 className="font-sans-black text-dezudiorange tracking-looser uppercase mb-4 text-footer-sm lg:text-footer-base">
          Say Hello
        </h2>
        <address>
          <p>
            <a href="mailto:info@dezudio.com">info@dezudio.com</a>
          </p>
        </address>
      </section>
      <section className="col-start-1 tb:row-start-2 md:row-start-1 tb:col-span-4 md:col-span-3 mb-16 md:mb-0">
        <h2 className="font-sans-black text-dezudiorange tracking-looser uppercase mb-4 text-footer-sm lg:text-footer-base">
          Our Address
        </h2>
        <address>
          805 Rebecca Avenue
          <br />
          Pittsburgh, PA 15221
        </address>
      </section>
      <section className="col-start-1 tb:row-start-2 md:row-start-1 tb:col-span-4 md:col-span-3 mb-16 md:mb-0 pb-4 lg:pb-0">
        <h2 className="font-sans-black text-dezudiorange tracking-looser uppercase mb-4 text-footer-sm lg:text-footer-base">
          Follow Us
        </h2>
        <div className="flex space-x-7 lg:space-x-12">
          <a href="https://medium.com/dezudio">
            <StaticImage
              alt="Medium"
              className="w-10 lg:w-max"
              src="../../images/social/medium.svg"
            />
          </a>
          <a href="https://www.linkedin.com/company/dezudio">
            <StaticImage
              alt="LinkedIn"
              className="w-10 lg:w-max"
              src="../../images/social/linkedin.svg"
            />
          </a>
          <a href="https://www.instagram.com/dezudio/">
            <StaticImage
              alt="Instagram"
              className="w-10 lg:w-max"
              src="../../images/social/instagram.svg"
            />
          </a>
        </div>
      </section>
      <section className="col-span-12 col-start-1 lg:col-start-2 tb:row-start-3 pb-0 text-footer-sm lg:text-footer-base">
        &copy;Dezudio. All rights reserved.
      </section>
    </footer>
  </div>
);

export default Footer;
