import * as React from 'react';
import Container from './containers';
import Section from '../common/sections';
import {BlockLink} from '../common/links';
import tw, { styled } from 'twin.macro';

const Layout = ({ pageTitle, fromPerson, toPerson, children }) => {
  
  const fullTitle = pageTitle + " - Dezudio";
  
  const SectionBody = tw.div`
    block tb:grid
    grid-cols-10 md:grid-cols-10
    gap-0
    row-start-1
    col-start-1 md:col-start-2
    col-end-3 tb:col-end-12
    text-profile-body-tb lg:text-xs xl:text-base-tight
    text-blue-dark
    font-serif-reg
    `;

  const PrevBlockLink=styled(BlockLink)([tw`
    row-start-2 md:row-start-1
    col-start-1
    tb:col-span-3 md:col-auto
    mt-18 md:mt-0
    pt-0 md:pt-48
    xl:justify-self-center
    w-auto
    `]);

  const NextBlockLink=styled(BlockLink)([tw`
    row-start-2 md:row-start-1
    tb:col-end-13
    tb:col-span-3 md:col-auto
    mt-18 md:mt-0
    pt-0 md:pt-48
    text-right
    xl:justify-self-center
    w-auto
    `]);

  const CloseLink=styled(BlockLink)([tw`
    absolute
    right-10
    mt-8.4 md:mt-15
    w-0
    `]);

  const ShowWhenSmall = tw.span`
    visible md:hidden
    `
  const PeopleSection = styled(Section)([tw`
    grid-cols-2
    gap-x-0
    sm:pt-13 tb:pt-30 md:pt-37 lg:pt-49
    tb:pb-18 md:pb-49 lg:pb-60.6 xl:pb-bg-sm
    xl:w-96p
    `])

  return (
    <main>
      <title>{fullTitle}</title>
      <CloseLink to="..">
        <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><g stroke="#F45D48" stroke-width="4" fill="none" fill-rule="evenodd"><path d="M2 23.397 23.213 2.183"/><path d="m2.187 2 20.839 21.58"/></g></svg>
      </CloseLink>
      <Container>
        <PeopleSection>
          <PrevBlockLink to={fromPerson}>
            <svg className={`svg-arrow`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.13 19.26"><g data-name="Layer 2"><path fill="#f15e49" stroke="#f15e49" stroke-miterlimit="10" stroke-width=".75" d="M9.76.87v7.26h25v3h-25v7.26L.54 9.63 9.76.87z" data-name="Layer 1"/></g></svg>
            <ShowWhenSmall> Previous</ShowWhenSmall>
          </PrevBlockLink>
          <SectionBody>
            {children}
          </SectionBody>
          <NextBlockLink to={toPerson}><ShowWhenSmall>Next </ShowWhenSmall>
            <svg className={`svg-arrow`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.13 19.26"><g data-name="Layer 2"><path fill="#f15e49" stroke="#f15e49" stroke-miterlimit="10" stroke-width=".75" d="M25.38 18.39v-7.26h-25v-3h25V.87l9.21 8.76-9.21 8.76z" data-name="Layer 1"/></g></svg>
          </NextBlockLink>
        </PeopleSection>
      </Container>
    </main>
  );
};

export default Layout;
