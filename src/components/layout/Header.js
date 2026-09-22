import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const navLinkClass =
  'hover:font-sans-bold ml-6 mt-6 md:mt-0 self-end text-dezudiorange text-right block md:inline text-nav-sm lg:text-nav-lg xl:text-nav-xl';

const Header = ({ pageTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (to, label) => (
    <Link
      className={`${navLinkClass}${pageTitle === label ? ' font-sans-bold' : ''}`}
      to={to}
    >
      {label}
    </Link>
  );

  return (
    <header className="font-sans-reg text-base gap-2 md:gap-16 grid grid-cols-2 md:grid-cols-12 mx-auto pt-5 md:pt-14 lg:pt-6 w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl">
      <div className="flex-1">
        <Link className="bg-white hover:bg-dezudiorange float-left" to="/">
          <div className="float-left hover:brightness-0 hover:invert py-1 text-nav-sm">
            <StaticImage
              alt="Dezudio Wordmark"
              className="w-24 md:w-20 lg:w-32"
              loading="eager"
              placeholder="none"
              src="../../images/svg/dezudio.svg"
            />
          </div>
        </Link>
      </div>

      <div className="visible md:invisible block md:hidden text-right relative">
        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className={`absolute top-2 right-0 ${menuOpen ? 'nav-burger open' : 'nav-burger'}`}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <div />
          <div />
          <div />
        </button>
        <nav
          className={`absolute top-10 right-0 ${menuOpen ? 'visible' : 'invisible'}`}
        >
          {navLink('/about', 'About')}
          {navLink('/latest', 'Latest')}
        </nav>
      </div>

      <nav className="md:col-end-13 md:col-start-6 float-right invisible md:visible hidden md:block text-right">
        {navLink('/about', 'About')}
        {navLink('/latest', 'Latest')}
      </nav>
    </header>
  );
};

export default Header;
