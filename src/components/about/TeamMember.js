import * as React from 'react';
import { Link } from 'gatsby';

const TeamMember = ({ children, name, role, to, href }) => {
  const linkClassName = `
    block
    font-sans-reg
    my-0
    text-dezudiorange
    text-link-sm
    w-auto md:w-auto
    sm:text-biolink-sm md:text-biolink-md lg:text-biolink-lg xl:text-biolink-xl
    tb:pt-2.5 sm:pb-6 tb:pb-0
  `;

  const link = href ? (
    <a className={linkClassName} href={href}>
      LinkedIn &rarr;
    </a>
  ) : (
    <Link className={linkClassName} to={to}>
      Bio &rarr;
    </Link>
  );

  return (
    <article className="text-center">
      {children}
      <h2 className="font-condensed-bold mt-2 -mx-5 text-5xs md:text-profile-md lg:text-profile-lg xl:text-profile-xl">
        {name}
      </h2>
      <h3 className="font-condensed -mx-5 text-5xs md:text-profile-md lg:text-profile-lg xl:text-profile-xl">
        {role}
      </h3>
      {link}
    </article>
  );
};

export default TeamMember;
