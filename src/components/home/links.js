import * as React from 'react';
import { Link } from 'gatsby';

const orangeLinkClassName = `
  block
  font-sans-reg
  text-dezudiorange
`;

const blockLinkClassName = `
  ${orangeLinkClassName}
  my-0
  text-link-sm md:text-link-md lg:text-heading-lg xl:text-link-xl
  w-sm md:w-auto
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

export const BlockLink = ({ children, ...props }) => (
  <Link className={blockLinkClassName} {...props}>
    {children}
  </Link>
);

export const InlineLink = ({ children, ...props }) => (
  <Link className="border-b lg:border-b-2 border-dezudiorange" {...props}>
    {children}
  </Link>
);

export const LatestExternalTaglineLink = ({ children, ...props }) => (
  <a className={latestExternalTaglineLinkClassName} {...props}>
    {children}
  </a>
);
