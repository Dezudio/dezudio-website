import * as React from 'react';
import { Link } from 'gatsby';

const orangeLinkClassName = `
  block
  font-sans-reg
  text-dezudiorange
`;

const bioLinkClassName = `
  ${orangeLinkClassName}
  my-0
  text-link-sm
  w-auto md:w-auto
  sm:text-biolink-sm md:text-biolink-md lg:text-biolink-lg xl:text-biolink-xl
  tb:pt-2.5 sm:pb-6 tb:pb-0
`;

const latestExternalTaglineLinkClassName = `
  ${orangeLinkClassName}
  text-link-sm md:text-link-sm-loose lg:text-link-base
  md:col-end-13 tb:col-start-7 lg:col-start-7
  my-0
  row-start-2 tb:row-start-1
  text-center tb:text-left
  tb:ml-8
  w-37 md:w-auto
`;

export const BioBlockLink = ({ children, ...props }) =>
  props.href ? (
    <a className={bioLinkClassName} {...props}>
      {children}
    </a>
  ) : (
    <Link className={bioLinkClassName} {...props}>
      {children}
    </Link>
  );

export const LatestExternalTaglineLink = ({ children, ...props }) => (
  <a className={latestExternalTaglineLinkClassName} {...props}>
    {children}
  </a>
);
