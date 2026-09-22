import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';

const sectionClassName = `
  relative mx-auto flex min-h-[60vh] w-sm flex-col justify-center overflow-hidden
  py-24 tb:w-tb md:min-h-[70vh] md:w-md lg:w-lg xl:w-xl
`;

const numberClassName = `
  relative z-10 font-sans-black text-dezudiorange
  text-heading-4xl md:text-heading-6xl lg:text-tagline-5xl
`;

const paragraphClassName = `
  relative z-10 max-w-lg font-serif-reg text-white
  text-base md:text-lg lg:text-xl
`;

const linkClassName = `
  relative z-10 mt-8 block w-fit font-sans-reg text-dezudiorange
  text-link-sm md:text-link-md lg:text-link-lg
`;

const NotFoundPage = () => (
  <Layout pageTitle="Not found">
    <div className="clear-both bg-blue-dark">
      <section className={sectionClassName}>
        <div className={numberClassName}>404</div>
        <p className={paragraphClassName}>
          We couldn’t find what you were looking for
          <span className="text-dezudiorange">.</span>
        </p>
        <Link className={linkClassName} to="/">
          Go home &rarr;
        </Link>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <title>Not found - Dezudio</title>;
